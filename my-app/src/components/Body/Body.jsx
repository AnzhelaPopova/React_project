import React from 'react';
import foto from './foto.png';
import './Body.css';

function Body(props) {
  return (
    <div className='body' >
      <div className='body__item'>
        <img src={foto} className="foto" alt="foto" />
        <div className='body__item_title'>
          <h2>Мастерская <br /><span>Анны Олифер</span> </h2>
          <p className='body__item_title-text'>Самый уютный домашний текстиль</p>
        </div>
      </div>
      <div className='body__button'>
        <button>Пух и перо</button>
        <button>Вышивка</button>
      </div>
    </div >
  );
}
export default Body;
