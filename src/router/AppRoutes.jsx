// src/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages & Components (You'll need to adjust the import paths)
import Home from "../pages/customer/Home";
import Products from "../pages/customer/Products";
import ProductDetails from "../pages/customer/ProductDetails";
import Cart from "../pages/customer/Cart";
import Checkout from "../pages/customer/Checkout";
import Login from "../pages/customer/Login";
import Register from "../pages/customer/Register";
import Profile from "../pages/customer/Profile";
import Wishlist from "../pages/customer/Wishlist";
import OrderSuccess from "../pages/customer/OrderSuccess";
import NotFound from "../pages/common/NotFound";
import AdminDashboard from "../pages/admin/Dashboard";
import AdminProducts from "../pages/admin/Products";
import AdminOrders from "../pages/admin/Orders";
import AdminUsers from "../pages/admin/Users";
import AdminCategories from "../pages/admin/Categories";
import AdminSettings from "../pages/admin/Settings";

// Layouts & Protected Route (You'll need to adjust the import paths)
import CustomerLayout from "../components/customer/CustomerLayout";
import AdminLayout from "../components/admin/AdminLayout";
import ProtectedRoute from "../components/common/ProtectedRoute";

/**
 * Defines all the application routes.
 */
function AppRoutes() {
  return (
    <Routes>
      {/* Standalone Pages (No Layout) */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Customer Pages with Layout */}
      <Route path="/" element={<CustomerLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="profile" element={<Profile />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="order-success" element={<OrderSuccess />} />
      </Route>

      {/* Admin Pages (Protected and with Admin Layout) */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="orders" element={<AdminOrders />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="categories" element={<AdminCategories />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>

      {/* 404 Page (Catch-all) */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
