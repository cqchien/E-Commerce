import React from 'react';
import { BrowserRouter, Route, Link} from "react-router-dom";

import './App.css';
import './index.css'

import HomeScreen from './components/HomeScreen'
import ProductScreen from './components/ProductScreen'

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open")
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (

  <BrowserRouter>
    <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>
          ☰
        </button>
        <Link to="/">amoniac</Link>
      </div>
      <div className="header-links">
        <a href="cart.html">Cart</a>
        <a href="singin.html">Sing in</a>
      </div>
    </header>
    <aside className="sidebar">
      <h3>Shopping Categories</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>X</button>
      <ul className="product-category">
        <li>
          <a href="index.html">Pants</a>
        </li>
        <li>
          <a href="index.html">Shirt</a>
        </li>
      </ul>
    </aside>
    <main className="main">
      <div className="content">
        
        <Route path="/" exact="true" component = {HomeScreen} />
        <Route path="/product/:id" component = {ProductScreen} />
        
      </div>
    </main>
    <footer className="footer">
      All right reserved.
    </footer>
  </div>
  </BrowserRouter>

  );
}

export default App;
