import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import ProductsDetails from './components/ProductsDetails/ProductsDetails';
import ProductsAdd from './components/ProductsAdd/ProductsAdd';
import { BrowserRouter as Router, Route, Routes, useRoutes } from 'react-router-dom'
import 'react-loading-skeleton/dist/skeleton.css'

const AppRoute = () => {
  let routes = useRoutes([
    { path: "/", element: <Products /> },
    { path: "/details", element: <ProductsDetails /> },
    { path: "/add", element: <ProductsAdd /> },
  ]);
  return routes;
};

function App() {
  return (
    <>
    <Header />
    <div className="App container mx-auto">
      <Router>
        <AppRoute />
      </Router>
    </div>
    </>
  );
}

export default App;
