import React from 'react';
import './App.css';
import './index.css'

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open")
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
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
        <ul className="products">
          <li>
            <div className="product">
              <img className="product-img" src="/images/slim-men-shirt-01.jpg" alt="slim men shirt" />
              <div className="product-name">
                <a href="product.html">Slim men shirt</a>
              </div>
              <div className="product-brand">Nike</div>
              <div className="product-price">$40</div>
              <div className="product-ratting">4.5 stars</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-img" src="/images/slim-men-shirt-01.jpg" alt="slim men shirt" />
              <div className="product-name">
                <a href="product.html">Slim men shirt</a>
              </div>
              <div className="product-brand">Nike</div>
              <div className="product-price">$40</div>
              <div className="product-ratting">4.5 stars</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-img" src="/images/slim-men-shirt-01.jpg" alt="slim men shirt" />
              <div className="product-name">
                <a href="product.html">Slim men shirt</a>
              </div>
              <div className="product-brand">Nike</div>
              <div className="product-price">$40</div>
              <div className="product-ratting">4.5 stars</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-img" src="/images/slim-men-shirt-01.jpg" alt="slim men shirt" />
              <div className="product-name">
                <a href="product.html">Slim men shirt</a>
              </div>
              <div className="product-brand">Nike</div>
              <div className="product-price">$40</div>
              <div className="product-ratting">4.5 stars</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-img" src="/images/slim-men-shirt-01.jpg" alt="slim men shirt" />
              <div className="product-name">
                <a href="product.html">Slim men shirt</a>
              </div>
              <div className="product-brand">Nike</div>
              <div className="product-price">$40</div>
              <div className="product-ratting">4.5 stars</div>
            </div>
          </li>
        </ul>
      </div>
    </main>
    <footer className="footer">
      All right reserved.
    </footer>
  </div>

  );
}

export default App;
