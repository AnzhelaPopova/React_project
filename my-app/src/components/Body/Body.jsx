import React, { useState, useEffect } from 'react';
import bin from '../../assets/images/bin.png';
import './Body.css';


function Body(props) {
  const [word, setWord] = useState('');
  const [transcription, setTranscription] = useState('');
  const [translation, setTranslation] = useState('');
  const [inputs] = useState([]); 
  const [addedWords, setAddedWords] = useState(new Set()); // Set для хранения добавленных слов
  console.log (addedWords)
  console.log(addedWords.values().next().value);
  
  const wordChange = event => {
    setWord(event.target.value);
  };

  const save = () => {


    let div = document.getElementById("input"); // Получаем контейнер, в котором будут располагаться новые инпуты
    let transcription= document.getElementById('transcription').value; // Получаем значение поля transcription
    let translation = document.getElementById('translation').value; // Получаем значение поля transcription
    let transcriptionValue = transcription;
    let translationValue = translation;
    
    if (transcriptionValue === '' && translationValue === '') { 
      alert ('Ошибка: слово не найдено'); 
      return; // Останавливаем выполнение функции 
  } 

  if (word === '') { 
      alert ('Ошибка: введите слово'); 
      return; // Останавливаем выполнение функции 
  }

  if (addedWords.has(word)) {  
    alert('Ошибка: слово уже добавлено');  
    return; // Останавливаем выполнение функции  
  }
    
    let newInput1 = document.createElement("input"); // Создаем новый инпут для слова
    let newInput2 = document.createElement("input"); // Создаем новый инпут для транскрипции
    let newInput3 = document.createElement("input"); // Создаем новый инпут для перевода
    let newInput4 = document.createElement("img"); // Создаем новый инпут для перевода

    newInput1.value = word; 
    newInput2.value = transcriptionValue; 
    newInput3.value = translationValue; 
    newInput4.src = bin
    newInput4.onclick = () => removeInput(div.getElementsByTagName("input").length - 1);
    div.appendChild(newInput1);
    div.appendChild(newInput2); 
    div.appendChild(newInput3); 
    div.appendChild(newInput4);

    setAddedWords(new Set(addedWords.add({ word, transcription: transcriptionValue, translation: translationValue }))); // Добавляем новое слово в Set добавленных слов
    

    setWord(''); 
    setTranscription(''); 
    setTranslation(''); 
  };

  useEffect(() => {

    
    localStorage.setItem('addedWords', JSON.stringify(Array.from(addedWords)));
  }, [addedWords]);
  console.log (localStorage)
  console.log (addedWords)

  
  const removeInput = (index) => {
    
    let div = document.getElementById("input");
    let inputs = div.getElementsByTagName("input");
    let img = div.getElementsByTagName("img")[index];
    let removedWord = inputs[index].value; 
    div.removeChild(img);
    for (let i = 0; i < inputs.length; i++) {
      if (i === index || i === index+1 || i === index+2) {
        div.removeChild(inputs[i]);
      }
    }
    addedWords.delete(removedWord); // Удаляем удаленное слово из Set добавленных слов
  };

  const fetchData = async () => {
    try {
      const response = await fetch('http://itgirlschool.justmakeit.ru/api/words');
      const data = await response.json();
      let InputWord = document.getElementById('word')
      let valueWord = InputWord.value

      let wordFound = false;
      
      for (let i = 0; i < data.length; i++) {
        if (valueWord === data[i].english) {
          document.getElementById('transcription').value = data[i].transcription
          document.getElementById('translation').value = data[i].russian
          wordFound = true;
          break; 
        } 
      }
      if (!wordFound) {
        alert('такого слова нет в базе данных');
      }
    } catch (error) {
      console.log('Ошибка при получении данных:', error);
    }
  };

  useEffect(() => {
    fetchData();

  }, []);

  return (
    <div id='input'>
      <input
        id='word'
        type="text"
        value={word}
        onChange={wordChange}
        placeholder="Введите слово"
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

      <button id="button" onClick={fetchData}>Поиск</button>
      <button id="button" onClick={save}>Сохранить</button>

   {/* Выводим созданные элементы input */}
   {inputs.map((el, index) => (
        <div key={index}>{el}</div>
      ))}
   
    </div>
  );
}

export default Body;