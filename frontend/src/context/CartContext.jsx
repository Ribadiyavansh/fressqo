import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    // Initialize state from localStorage if available
    const [cartItems, setCartItems] = useState(() => {
        try {
            const localData = localStorage.getItem('fresqoCartItems');
            return localData ? JSON.parse(localData) : [];
        } catch (error) {
            console.error("Failed to load cart from localStorage", error);
            return [];
        }
    });

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('fresqoCartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                // If item exists, increase quantity
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            // Otherwise add new item with quantity 1
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const handleQuantityChange = (id, delta) => {
        setCartItems(prevItems =>
            prevItems.map(item => {
                if (item.id === id) {
                    const newQuantity = item.quantity + delta;
                    return { ...item, quantity: Math.max(1, newQuantity) };
                }
                return item;
            })
        );
    };

    const handleRemoveItem = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cartItems.reduce((sum, item) => sum + ((parseFloat(item.price) || 0) * item.quantity), 0);

    const value = {
        cartItems,
        addToCart,
        handleQuantityChange,
        handleRemoveItem,
        totalItems,
        subtotal
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
