import React from 'react';
import b from './books.module.scss'

function Books() {

  const handleClick = (e, x) => {
      e.preventDefault()
      
      console.log(b.actual)
      const tablinks = document.getElementById("btab").querySelectorAll("button");
      console.log(tablinks)
      for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(b.actual, "");
      }
      e.target.style.display = "block";

      const sty = b.actual
      console.log(sty)
      e.target.className = sty;
      console.log(e.target.className)
  };
  
  return (
    <div className={b.container}>
      <div className={b.tab} id="btab">
        <button onClick={e => handleClick(e, "London") }>London</button>
        <button onClick={e => handleClick(e, "Paris") }>Paris</button>
        <button onClick={e => handleClick(e, "Tokyo") }>Tokyo</button>
      </div>
    </div>
  );
}

export default Books;