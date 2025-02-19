import React from 'react'

function App() {
  return (
    <>
    <header>
      <div className='logo'>
        PIGAORDER
      </div>
      
        <a href="">Home</a>
        <a href="">Products</a>
        <a href="">Shop here</a>
        <a href="">Login/Register</a>
        
      
    </header>
    
    <section className='hero'>
      <h1>SHOP WITH US! PIGA IYO ORDER </h1>
      <h2>Your one-stop shop for the best deals, top-quality products, and hassle-free shopping!</h2>
      <p>Shop Smart, Save More . Enjoy unbeatable discounts, flash sales, and exclusive offers.</p>
      <button>🛍️ Start Shopping Now</button>
      <button>🔥 Explore Hot Deals</button>
      <button>🚀 Order in Seconds</button>
    </section>
    <section className='products'>
      <h2>🛒 Discover Our Best-Selling Products</h2>
      <h3>Handpicked just for you! Quality, Variety, and Unbeatable Prices!</h3>
     
      <h3>FEATURED PRODUCTS</h3>
      <div className='product-container'>
      <img src="src/assets/laptop.jpg" alt="product1"></img>
       
       <h3>Product 1</h3>

       <p>Price: $10.99</p>
       <p>product description</p>
       <button>Add to Cart</button>

      </div>
      
      
      
      

    </section>
    <section>
      <h1>🚀 Why Piga Order? Your Best Shopping Companion!</h1>
      <p>🛒 Hassle-Free Shopping  A smooth, user-friendly experience from browsing to checkout.</p>
      <p>⚡ Fast & Reliable Delivery  Get your orders delivered quickly, right to your doorstep.</p>
      <p>📦 100% Authentic Products  We ensure that every product is genuine</p>
      <p>📞 24/7 Customer Support  Get help whenever you need it</p>
      <p>💰 Best Deals & Discounts  Enjoy unbeatable prices, exclusive offers, and flash sales.</p>
      <p>🔒 Secure & Convenient Payments  Multiple payment options with end-to-end security.</p>
      <button>🚀 Explore Our Collection</button>
    </section>
    <section>
      <h2>What Our Customers Say</h2>
      <h3>Real experiences from real shoppers  See why people love Piga Order!</h3>
      <p>🗣 "Piga Order made my shopping experience seamless! Fast delivery and amazing deals!"  Jane M.</p>
      <p>🗣 "I love the quality of products and the easy checkout process. Highly recommended!"  Brian K.</p>
      <p>🗣 "Customer support was super helpful when I had an issue. Best online store!"  Amina O.</p>
      <button>✨ Leave a Review</button>
    </section>
    <section>
      <h2>📩 Stay Updated! Get Exclusive Deals & Offers</h2>
      <h3>Join our VIP list and be the first to know about new arrivals, discounts, and special promotions!</h3>
      <p>✅ Exclusive Discounts  Get special deals only for subscribers.</p>
      <p>✅ Early Access  Be the first to shop new collections.</p>
      <p>✅ Shopping Tips & Trends  Receive expert advice straight to your inbox.</p>
      <button>🚀 Join Now for Free</button>
      <input type="email" placeholder="Enter your email address"></input>
      <button>Subscribe</button>
    </section>
    <section>
      <h2>🛍️ How It Works  Shop in 3 Easy Steps!</h2>
      <p>1️⃣ Browse & Select  Explore our wide range of products and pick your favorites.
      </p>
      <p>2️⃣ Add to Cart & Checkout  Securely place your order with multiple payment options.</p>
      <p>3️⃣ Fast Delivery to Your Doorstep  Sit back and relax while we deliver straight to you!</p>
      <button>🔥 Explore Deals Today</button>
    </section>
    
    <footer className='footer'>
      <a href="">Shop</a>
      <a href="">Customer Service</a>
      <a href="">About Us</a>
      <h2>Contact us:</h2>
      <p>Phone: 123-456-7890</p>
      <p>Email: support@pigaorder.com</p>
      <p>Address: P.O. Box 1234, Nairobi, Kenya</p>
      <a href="">Twitter</a>
      <a href="">LinkedIn</a>
      <a href="">Tiktok</a>
      <a href="">Facebook</a>
      
      <button>Youtube</button>
      <p>&copy; 2025 Piga Order. All rights reserved.</p>
      <li>Terms and Conditions</li>
    </footer>
    

    </>
    
  )
}

export default App
