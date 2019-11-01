import React from 'react';
import t from './banner.module.scss';


function Banner() {
  return (
    <div className={t.container}>
        <img src="/img/main/Banner.jpg" alt="banner" className={t.block1} />
        <img src="/img/main/deal of the month.jpg" alt="deal of the month" className={t.block2} />
    </div>
  );
}

export default Banner;
