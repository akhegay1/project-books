import React from 'react';
import t from './toptopmenu.module.css';

function Toptopmenu() {
  return (
    <div className={t.toptopnav}>
        <div href="#home" className={t.block}>Sign In</div>
        <div href="#news" className={t.block}>My Account</div>
        <div href="#contact" className={t.block}>Order Status</div>
        <div href="#about" className={t.block}>Help</div>
        <div href="#space" className={t.blockright}></div>
    </div>
  );
}

export default Toptopmenu;
