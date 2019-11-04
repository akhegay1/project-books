import React from 'react';
import './App.css';
import Toptopmenu from './components/toptopmenu/toptopmenu';
import Cart from './components/cart/cart';
import Topmenu from './components/topmenu/topmenu';
import Banner from './components/banner/banner';
import Wrap from './components/books/wrap';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <header >
        <Toptopmenu/>
      </header>
        <Cart/>
        <Topmenu/>
        <Banner/>
        <Wrap/>        
      <footer><Footer/></footer>
    </div>
  );
}

export default App;
