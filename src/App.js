import React from 'react';
import './App.css';
import Toptopmenu from './components/toptopmenu/toptopmenu';
import Cart from './components/cart/cart';


function App() {
  return (
    <div className="App">
      <header >
        <Toptopmenu/>
      </header>
      <section><Cart/></section>

      
      <section>2</section>
      <section>3</section>
      <footer>F</footer>
    </div>
  );
}

export default App;
