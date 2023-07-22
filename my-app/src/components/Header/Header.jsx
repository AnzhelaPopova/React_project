import React from 'react';
import './Header.css'; 
import logo from '../../assets/images/9.jpg';

export default function Header(){

  // function showCard() {
  //   // Проверяем наличие данных в LocalStorage
  //   if (localStorage.getItem('myData')) {
  //     // Если данные есть, перенаправляем на другую страницу
  //     console.log (localStorage)
  //     document.getElementById("card").style.display = "flex";
  //   // } else {
  //   //   // Если данных нет, выводим ошибку
  //   //   alert('Слова для изучения не добавлены');
  //   //   return
  //   // }
  // }}

    return(
      <nav className = "Header">
        <div className='Header_title'>
        <a href="/"><img src={logo}  alt="logo" className='img_logo' /></a>
        {/* <h2>Приложение для изучения английского</h2> */}
        </div>
        <div className='button'>
        <button id="button" >Все слова</button>
        <button id="button"  >Карточки</button>
        </div>
       
      </nav>
    );
  }
