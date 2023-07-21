import React, { useState, useEffect } from 'react';
import bin from '../../assets/images/bin.png';
import './Body.css';
function Body(props) {
  const [dropdown, setDropdown] = useState('');
  const [transcription, setTranscription] = useState('');
  const [translation, setTranslation] = useState('');
  const [inputs] = useState([]); 
  const [addedWords, setAddedWords] = useState(new Set()); 
  console.log (addedWords)
  const wordChange = event => {
    setDropdown(event.target.selectedOptions[0].text);
  };
  const save = () => {
    let div = document.getElementById("input");
    let transcription= document.getElementById('transcription').value;
    let translation = document.getElementById('translation').value; 
    let transcriptionValue = transcription;
    let translationValue = translation;

    if (transcriptionValue === '' && translationValue === '') { 
      alert ('Ошибка: выберете слово'); 
      return; // Останавливаем выполнение функции 
  } 

    let newInput1 = document.createElement("input"); 
    let newInput2 = document.createElement("input"); 
    let newInput3 = document.createElement("input"); 
    let newInput4 = document.createElement("img"); 
    newInput1.value = dropdown; 
    newInput2.value = transcriptionValue; 
    newInput3.value = translationValue; 
    newInput4.src = bin
    div.appendChild(newInput1);
    div.appendChild(newInput2); 
    div.appendChild(newInput3); 
    div.appendChild(newInput4);
    setAddedWords(new Set(addedWords.add({ dropdown, transcription: transcriptionValue, translation: translationValue }))); 
    setDropdown('');
    setTranscription(''); 
    setTranslation(''); 
  };
  useEffect(() => {
      localStorage.setItem('addedWords', JSON.stringify(Array.from(addedWords)));
  }, [addedWords]);
  
  const fetchData = async () => {
    try {
      const response = await fetch('http://itgirlschool.justmakeit.ru/api/words');
      const data = await response.json();
  
      let selectedWord = data.find(option => option.english === dropdown);
      if (selectedWord) {
        setTranscription(selectedWord.transcription);
        setTranslation(selectedWord.russian);
      }
  
      let InputDropdown = document.getElementById('dropdown');
      data.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.id;
        optionElement.textContent = option.english;
        InputDropdown.appendChild(optionElement);
      });
    } catch (error) {
      console.log('Ошибка при получении данных:', error);
    }
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div id='input'>
    <select id="dropdown"
        type="text"
        value={dropdown}
        onChange={wordChange}
        placeholder="Введите слово">
        <option value="">Выберите вариант</option>
    </select>
<div>

      <input
        id="dropdown"
        type="text"
        value={dropdown}
        onChange={wordChange}
        placeholder="Введённое слово"
        readOnly 
      />
      <input
        id='transcription'
        type="text"
        value={transcription}
        onChange={event => setTranscription(event.target.value)}
        placeholder="Транскрипция"
        readOnly 
      />
      <input
        id='translation'
        type="text"
        value={translation}
        onChange={event => setTranslation(event.target.value)}
        placeholder="Перевод"
        readOnly 
      />
      <button id="button" onClick={save}>Сохранить</button>
</div>

      
   {inputs.map((el, index) => (
        <div key={index}>{el}</div>
      ))}
    </div>
  );
}
export default Body;