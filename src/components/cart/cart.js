import React from 'react';
import c from './cart.module.css';

function Cart() {
  return (
    <div className={c.container}>
        <div className={c.containerIn1}>
            <img src={'/img/main/logo.jpg'} alt={'logo'}/>
            <div className={c.search_panel} align="left">
                <input type="text" name="lname" className={c.search_inp}/>
            </div>
            <div>A</div>
            <div>B</div>
        </div>
    </div>
  );
}

export default Cart;
