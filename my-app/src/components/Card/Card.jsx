import './Card.css'; 
import React from 'react'; 

export default function Card() {
  const addedWords = JSON.parse(localStorage.getItem('addedWords'));
  
  function handleTranslationClick () { 
    document.getElementById("text_translation").style.display = "block";
    document.querySelector(".button_translation").style.display = "none";
  } 

        return (
    <div>

         
    {addedWords.map((item, index) => { 
        const { word, transcription, translation } = item;

   
        return (
          <div key={index} className='card' id='card'>
            <div className='card_item'>
              <p className='text'>{word}</p>
              <p className='text'>{transcription}</p>
              <p className='text_translation' id = "text_translation">{translation}</p>
                  <button id='button ' className='button_translation' onClick={handleTranslationClick}>  
                    Показать перевод  
                  </button>
              
            </div>
  
            <div className='button'>
              <button id='button'>Знаю</button>
              <button id='button'>Незнаю</button>
            </div>
          </div>
         ); 
        })} 
      </div> 
    );
  }


