import React from 'react';
import c from './categories.module.scss';
import cn from 'classnames';

function Categories() {
  return (
    <div className={c.container}>
      <div >
        <div className={c.vertical_menu__frst}>Categories</div>
        <div className={c.vertical_menu__scnd} href="#" >All</div>
        <div className={cn(c.vertical_menu,c.vertical_menu__nbottom)}><b>Fiction & Literature</b></div>
        <div className={c.vertical_menu}>Children</div>
        <div className={c.vertical_menu}>Science Fiction</div>
        <div className={c.vertical_menu}>Fantasy</div>
        <div className={c.vertical_menu}>Mystery</div>
        <div className={c.vertical_menu}>Romance</div>
        <div className={c.vertical_menu}>Horror</div>
        <div className={c.vertical_menu}>Poetry</div>
        <div className={c.vertical_menu}>Literature</div>
        <div className={c.vertical_menu}>Crime</div>
        <div className={cn(c.vertical_menu,c.vertical_menu__nbottom)}><b>Non-Fiction</b></div>
        <div className={c.vertical_menu}>Comic</div>
        <div className={c.vertical_menu}>Cook</div>
        <div className={c.vertical_menu}>Psychology</div>
        <div className={c.vertical_menu}>Medical</div>
        <div className={c.vertical_menu}>Art</div>
        <div className={c.vertical_menu}>Photography</div>
        <div className={c.vertical_menu}>Law</div>
        <div className={c.vertical_menu}>History</div>
        <div className={c.vertical_menu}>Business</div>
        <div className={c.vertical_menu}>Computer</div>
        <div className={cn(c.vertical_menu,c.vertical_menu__nbottom)}><b>Other</b></div>
        <div className={c.vertical_menu}>Baby</div>
        <div className={c.vertical_menu}>Sex</div>
        <div className={c.vertical_menu}>Travel</div>
        <div className={c.vertical_menu}>Science</div>
        <div className={c.vertical_menu}>Sports</div>
      </div>


    </div>
  );
}

export default Categories;