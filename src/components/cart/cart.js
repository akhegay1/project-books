import React from 'react';
import c from './cart.module.scss';

function Cart() {
  return (
    <div className={c.container}>
        <div className={c.inner}>
            <img src={'/img/main/logo.jpg'} alt={'logo'}/>
            <div className={c.inner__searchpanel} align="left" >
                <input type="text" name="lname" className={c.searchpanel__inp}/>
                <img src="/img/main/srch.png" alt="srch" className={c.searchpanel__icon} />
                <div className={c.searchpanel__txt}  >Search</div>
            </div>
            
            <div className={c.cart}>
                <div className={c.cart_your}>
                    <img src={'/img/main/cart.jpg'} alt={'vline'}/>
                    <div className={c.cart__yourttxt}>Your cart</div>&nbsp; 
                    (2 items)
                </div>
                
                <div className={c.cart_checkout}>
                    <div className={c.cart_txt}>$125</div>
                   <button type="button" className={c.cart_checkoutbtn}>Checkout</button>
                </div>                
            </div>

            <img src={'/img/main/vertline.png'} alt={'vline'}/>
                
            <div className={c.cart_wishlist}>
                <div ><img src={'/img/main/star.png'} alt={'vline'}/></div>
                <div className={c.cart__tip}>20</div>

                <div className={c.cart_txt}>Wish list</div>
            </div>
            
        </div>
    </div>
  );
}

export default Cart;
