import React, { useState } from 'react';
import bin from '../../assets/images/bin.png';
import './Body.css'; 


function Body(props) {
  const [word, setWord] = useState('');
  const [transcription, setTranscription] = useState('');
  const [translation, setTranslation] = useState('');
  const [savedStrings, setSavedStrings] = useState([]);

  const  WordChange = event => {
    setWord(event.target.value);  
  };  
  
  const  TranscriptionChange = event => {
    setTranscription(event.target.value);  
  };  
  
  const  TranslationChange = event => {  
    setTranslation(event.target.value);  
  };  
    
  const saveData = () => {   
    const savedData = `${word} - ${transcription} - ${translation}`;  
    setSavedStrings([...savedStrings, savedData]);   
  };  

  const deleteWord = index => {  
    const deletedStrings = savedStrings.filter((_, i) => i !== index);  
    setSavedStrings(deletedStrings);  
  };  
  
  return (
    <div>  
      <input  
        type="text"  
        value={word}  
        onChange={ WordChange}  
        placeholder="Введите слово"  
      />  

      <input  
        type="text"  
        value={transcription}  
        onChange={ TranscriptionChange}  
        placeholder="Транскрипция"  
      />  

      <input  
        type="text"  
        value={translation}  
        onChange={ TranslationChange}  
        placeholder="Перевод"  
      />  

      <button onClick={saveData}>Сохранить</button>  

      <div >  
        {savedStrings.map((savedString, index) => {  
          const [savedWord, savedTranscription, savedTranslation] = savedString.split(' - ');  
          return (  
            <div key={index} className='saveString'>  
              <input  type="text" value={savedWord} readOnly />  
              <input  type="text" value={`[${savedTranscription}]`} readOnly />  
              <input  type="text" value={savedTranslation} readOnly />  
              <button className="btn_img" onClick={() => deleteWord(index)}>  
                <img src={bin}  alt="Корзина" />  
              </button>  
            </div>  
          );  
        })}  
      </div>  
    </div>  
  );
}

export default Body;