import React from 'react';
import t from './topmenu.module.scss';


function Topmenu() {
  return (
    <div className={t.topnav}>
        <div href="#Computers" className={t.block}>Computers</div>
        <div href="#Cooking" className={t.block}>Cooking</div>
        <div href="#Education" className={t.block}>Education</div>
        <div href="#Fiction" className={t.block}>Fiction</div>
        <div href="#Health" className={t.block}>Health</div>
        <div href="#Mathematics" className={t.block}>Mathematics</div>
        <div href="#Medical" className={t.block}>Medical</div>
        <div href="#Reference" className={t.block}>Reference</div>
    </div>
  );
}

export default Topmenu;
