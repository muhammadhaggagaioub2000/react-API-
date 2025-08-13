import React from 'react';
import { useState } from 'react';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'; // use 'react-router-dom' instead of 'react-router'
import Layout from './components/Layout/Layout';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import ProductDetails from './Pages/ProductDetail/ProductDetail';
import LoadingPage from './components/LoadingPage/LoadingPage';
export default function App() {
  const [Search, setSearch] = useState("pizza")
  const router = createHashRouter([
    {
      path: '/',  element: <Layout setSearch={setSearch} />, children: 
      [
        { index: true, element: <Products/> },
        { path: 'Products', element: <Products Search={Search}/> },
        { path: 'ProductsDetails/:id', element: <ProductDetails/> }, 
        { path: '*', element: <ErrorPage /> },
        { path: 'LoadingPage', element: <LoadingPage/> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}