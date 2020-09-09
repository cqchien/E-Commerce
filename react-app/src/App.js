import React from 'react';
import './App.css';
import './index.css'

import data from './mock/data.js' 

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
        <a href="index.html">ChiVy</a>
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
        <Route path="/" exact="true" component = "HomeScreen" />
        <Route path="/products/:id" component = "ProductScreen" />
        <ul className="products">
          {
            data.products.map( product => 
              <li>
                <div className="product">
                  <img className="product-img" src={product.image} alt="slim men shirt" />
                  <div className="product-name">
                    <a href="product.html">{product.name}</a>
                  </div>
                  <div className="product-brand">{product.brand}</div>
                  <div className="product-price">${product.price}</div>
                  <div className="product-ratting">{product.rating} Stars {product.numReview} Reviews</div>
                </div>
              </li>
              )
          }
        </ul>
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
