import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../utils/api';
import { useAuth } from './AuthContext';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const { user } = useAuth();
    const [cartItems, setCartItems] = useState([]);
    const [loadingCart, setLoadingCart] = useState(false);

    // Initialize state
    useEffect(() => {
        const fetchCart = async () => {
            if (user) {
                setLoadingCart(true);
                try {
                    const { data } = await api.get('/cart');
                    // Transform backend format to frontend format
                    const formattedItems = (data.items || []).map(item => ({
                        id: item.productId._id,
                        productId: item.productId._id,
                        name: item.productId.title,
                        price: item.productId.discountPrice || item.productId.price,
                        images: item.productId.images,
                        quantity: item.quantity,
                        ...item.productId
                    }));
                    setCartItems(formattedItems);
                    localStorage.setItem('fresqoCartItems', JSON.stringify(formattedItems));
                } catch (error) {
                    console.error("Failed to load user cart", error);
                } finally {
                    setLoadingCart(false);
                }
            } else {
                try {
                    const localData = localStorage.getItem('fresqoCartItems');
                    if (localData) {
                        setCartItems(JSON.parse(localData));
                    } else {
                        setCartItems([]);
                    }
                } catch (error) {
                    console.error("Failed to load local cart", error);
                    setCartItems([]);
                }
            }
        };
        fetchCart();
    }, [user]);

    // Save cart to localStorage whenever it changes (as fallback/cache)
    useEffect(() => {
        localStorage.setItem('fresqoCartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = async (product) => {
        const quantity = 1;
        const productId = product._id || product.id;

        // Optimistic UI update
        let updatedItems = [...cartItems];
        const existingItem = updatedItems.find(item => (item.productId || item.id) === productId);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            updatedItems.push({
                ...product,
                id: productId,
                productId: productId,
                quantity: quantity
            });
        }
        setCartItems([...updatedItems]);

        if (user) {
            try {
                await api.post('/cart', { productId, quantity });
            } catch (error) {
                console.error("Failed to add to backend cart", error);
                // In production, we might want to revert the optimistic update here
            }
        }
    };

    const handleQuantityChange = async (id, delta) => {
        let updatedItems = [...cartItems];
        const itemIndex = updatedItems.findIndex(item => (item.productId || item.id) === id);

        if (itemIndex > -1) {
            const newQuantity = updatedItems[itemIndex].quantity + delta;
            const finalQuantity = Math.max(1, newQuantity);
            updatedItems[itemIndex].quantity = finalQuantity;
            setCartItems([...updatedItems]);

            if (user) {
                try {
                    await api.put(`/cart/${id}`, { quantity: finalQuantity });
                } catch (error) {
                    console.error("Failed to update backend cart quantity", error);
                }
            }
        }
    };

    const handleRemoveItem = async (id) => {
        const updatedItems = cartItems.filter(item => (item.productId || item.id) !== id);
        setCartItems(updatedItems);

        if (user) {
            try {
                await api.delete(`/cart/${id}`);
            } catch (error) {
                console.error("Failed to remove from backend cart", error);
            }
        }
    };

    const clearCart = async () => {
        setCartItems([]);
        localStorage.removeItem('fresqoCartItems');
        if (user) {
            try {
                await api.delete('/cart');
            } catch (error) {
                console.error("Failed to clear backend cart", error);
            }
        }
    };

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cartItems.reduce((sum, item) => {
        const price = item.discountPrice || item.price || 0;
        return sum + (parseFloat(price) * item.quantity);
    }, 0);

    const value = {
        cartItems,
        addToCart,
        handleQuantityChange,
        handleRemoveItem,
        clearCart,
        totalItems,
        subtotal,
        loadingCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
