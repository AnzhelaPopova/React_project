import React from 'react';
import './Header.css'; 

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
        <h2>Приложение для изучения английского</h2>
        <div className='button'>
        <button id="button" >Все слова</button>
        <button id="button"  >Карточки</button>
        </div>
       
      </nav>
    );
  }
