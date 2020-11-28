import React from 'react';
export const ProductList = React.lazy(() => import("../pages/ProductList/ProductList"));
export const ProductDetail = React.lazy(() => import("../pages/ProductDetail/ProductDetail"));
export const Order = React.lazy(() => import("../pages/Order/Order"));
export const Cart = React.lazy(() => import("../pages/Cart/Cart"));
