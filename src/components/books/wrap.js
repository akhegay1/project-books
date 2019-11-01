import React from 'react';
import Books from './books/books';
import Categories from './categories/categories';
import w from './wrap.module.scss';

function Wrap() {
  return (
    <div className={w.container}>
      <Categories/>
      <Books/>      
    </div>
  );
}

export default Wrap;