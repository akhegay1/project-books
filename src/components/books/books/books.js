import React from 'react';
import b from './books.module.scss'
import booksData from '../../../booksData/booksData'
import cn from 'classnames';

function Books() {

  const handleClick = (e, x) => {
      e.preventDefault()
      
      const tablinks = document.getElementById("btab").querySelectorAll("button");
      
      for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(b.actual, b.not_actual);
      }
      e.target.style.display = "block";

      const sty = b.actual
      e.target.className = sty;
  };

  let newAllBooksArr = []
  let booksAr = []
  let j = 0
  let ind = ''
  
  //divide array of books into 3 arrays as 3 rows
  booksAr = []
  for (let x in booksData.books) {

    booksAr.push(booksData.books[x])
    
    if ((((parseInt(x) + 1) % 5) === 0) ) {
      ind = 'books' + j
      j++
      newAllBooksArr[ind] =  booksAr  
      booksAr = []  
    }
    
  }

  //console.log(newAllBooksArr)

  
  return (
    <div className={b.container}>
      <div className={b.tab} id="btab">
        <button className={b.actual} onClick={e => handleClick(e, "Best Sellers") }>Best Sellers</button>
        <button className={b.not_actual} onClick={e => handleClick(e, "New Arrivals") }>New Arrivals</button>
        <button className={b.not_actual} onClick={e => handleClick(e, "Used Books") }>Used Books</button>
        <button className={b.not_actual} onClick={e => handleClick(e, "Special Offers") }>Special Offers</button>
      </div>


      <div key="1" className={b.books_row}>
      {newAllBooksArr["books0"].map(n => (
        <div key={n.id}>
          <div className={b.books_cell_img}> <img src={`/img/books/${n.filename}.jpg`} alt={n.filename} className={b.books_cell} /></div>
          <div className={cn(b.books_cell,b.books_cell_price)}>{n.price}</div>
          <div className={b.books_cell_name}>{n.name}</div>
        </div>
      ))
      }
      </div>
      
      <div key="2" className={b.books_row}>
      {newAllBooksArr["books1"].map(n => (
        <div key={n.id}>
          <div className={b.books_cell_img}> <img src={`/img/books/${n.filename}.jpg`} alt={n.filename} className={b.books_cell} /></div>
          <div className={cn(b.books_cell,b.books_cell_price)}>{n.price}</div>
          <div className={b.books_cell_name}>{n.name}</div>
        </div>
      ))
      }
      </div>

      <div key="3" className={b.books_row}>
      {newAllBooksArr["books2"].map(n => (
        <div key={n.id}>
          <div className={b.books_cell_img}> <img src={`/img/books/${n.filename}.jpg`} alt={n.filename} className={b.books_cell} /></div>
          <div className={cn(b.books_cell,b.books_cell_price)}>{n.price}</div>
          <div className={b.books_cell_name}>{n.name}</div>
        </div>
      ))
      }
      </div>


    </div>
  );


}

export default Books;