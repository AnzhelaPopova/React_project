// import React from 'react';
// import './Card.css';

// export default function Card({ word, setShowTranslation, showTranslation}) {

//   const handleTranslationClick = () => {
//     setShowTranslation(true);
//   };

//   return (
//     <div className="card">
//       <div className="card_item">
//         <p className="text">{word.english}</p>
//         {showTranslation ? (
//           <p className="text">{word.russian}</p>
//         ) : (
//           <button className="button_translation" onClick={handleTranslationClick}>
//             Показать перевод
//           </button>
//         )}
//       </div>
//       <div className="button">
//         <button id="button">Знаю</button>
//         <button id="button">Не знаю</button>
//       </div>
//     </div>
//   );

// }

// Card.defaultProps = {
//   english: 'default word',
//   russian: 'default translate',
//   setShowTranslation: () => {},
//   showTranslation: false,
// };

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
        const { dropdown, transcription, translation } = item;

   
        return (
          <div key={index} className='card' id='card'>
            <div className='card_item'>
              <p className='text'>{dropdown}</p>
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

