import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

const Home = lazy(() => import('./pages/Home'));
const Shop = lazy(() => import('./pages/Shop'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const DashboardLayout = lazy(() => import('./components/DashboardLayout'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Profile = lazy(() => import('./pages/dashboard/Profile'));
const AddressBook = lazy(() => import('./pages/dashboard/AddressBook'));
const Wishlist = lazy(() => import('./pages/dashboard/Wishlist'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const SignUp = lazy(() => import('./pages/SignUp'));
const SignIn = lazy(() => import('./pages/SignIn'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));

// Checkout Flow Routes
const Checkout = lazy(() => import('./pages/checkout/Checkout'));
const Payment = lazy(() => import('./pages/checkout/Payment'));
const OrderReview = lazy(() => import('./pages/checkout/OrderReview'));
const OrderSuccess = lazy(() => import('./pages/checkout/OrderSuccess'));
const OrderTracking = lazy(() => import('./pages/OrderTracking'));

// Admin Routes
const AdminAuth = lazy(() => import('./pages/admin/AdminAuth'));
const AdminLayout = lazy(() => import('./pages/admin/AdminLayout'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const AdminAnalytics = lazy(() => import('./pages/admin/AdminAnalytics'));
const AdminOrders = lazy(() => import('./pages/admin/AdminOrders'));
const AdminProducts = lazy(() => import('./pages/admin/AdminProducts'));
const AdminProductEditor = lazy(() => import('./pages/admin/AdminProductEditor'));
const AdminUsers = lazy(() => import('./pages/admin/AdminUsers'));
const AdminBlog = lazy(() => import('./pages/admin/AdminBlog'));
const AdminBlogEditor = lazy(() => import('./pages/admin/AdminBlogEditor'));
const AdminSettings = lazy(() => import('./pages/admin/AdminSettings'));
const AdminSettingsGeneral = lazy(() => import('./pages/admin/AdminSettingsGeneral'));
const AdminSettingsSecurity = lazy(() => import('./pages/admin/AdminSettingsSecurity'));
const AdminSettingsAppearance = lazy(() => import('./pages/admin/AdminSettingsAppearance'));
const AdminNewsletter = lazy(() => import('./pages/admin/AdminNewsletter'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ScrollToTop />
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="product/:id" element={<ProductDetails />} />
              <Route path="dashboard" element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="profile" element={<Profile />} />
                <Route path="address" element={<AddressBook />} />
                <Route path="wishlist" element={<Wishlist />} />
              </Route>
              <Route path="blog" element={<Blog />} />
              <Route path="blog/:id" element={<BlogPost />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="checkout/payment" element={<Payment />} />
              <Route path="checkout/review" element={<OrderReview />} />
              <Route path="checkout/success" element={<OrderSuccess />} />
              <Route path="order-tracking" element={<OrderTracking />} />
            </Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            {/* Admin Portal */}
            <Route path="/admin-auth" element={<AdminAuth />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="analytics" element={<AdminAnalytics />} />
              <Route path="orders" element={<AdminOrders />} />
              <Route path="products">
                <Route index element={<AdminProducts />} />
                <Route path="new" element={<AdminProductEditor />} />
              </Route>
              <Route path="users" element={<AdminUsers />} />
              <Route path="blog">
                <Route index element={<AdminBlog />} />
                <Route path="new" element={<AdminBlogEditor />} />
              </Route>
              <Route path="settings" element={<AdminSettings />}>
                <Route index element={<AdminSettingsGeneral />} />
                <Route path="security" element={<AdminSettingsSecurity />} />
                <Route path="appearance" element={<AdminSettingsAppearance />} />
              </Route>
              <Route path="newsletter" element={<AdminNewsletter />} />
            </Route>
          </Routes>
        </Suspense>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
