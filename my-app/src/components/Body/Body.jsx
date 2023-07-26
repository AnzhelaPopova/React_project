import React, { useState, useEffect } from 'react';  
  
import bin from '../../assets/images/bin.png';  
import './Body.css';  
function Body(props) {  
  const [dropdown, setDropdown] = useState('');  
  const [transcription, setTranscription] = useState('');  
  const [translation, setTranslation] = useState('');  
  const [addedWords, setAddedWords] = useState([]);   
  // const [addedDivs, setAddedDivs] = useState([]);   
  console.log (addedWords)  
  const wordChange = event => {  
    setDropdown(event.target.selectedOptions[0].text);  
  };  
  
  function searchDuplicates () {   
    if (addedWords.length !== 0) {   
      for ( let i = 0; i < addedWords.length; i++) {   
        if (addedWords[i].dropdown === dropdown) {   
          alert('Ошибка: слово уже было добавлено');   
          return;   
        }   
      }   
    }   
    save ();   
  }  
  
  const save = (index) => {  
     
    let div = document.getElementById("input");  
    let transcription= document.getElementById('transcription').value;  
    let translation = document.getElementById('translation').value;   
    let transcriptionValue = transcription;  
    let translationValue = translation;  
  
    if (transcriptionValue === '' && translationValue === '') {   
      alert ('Ошибка: выберете слово');   
      return; // Останавливаем выполнение функции   
  }   
  
  let createDiv = document.createElement("div");  
  createDiv.className = "createDiv";  
    let newInput1 = document.createElement("input");   
    let newInput2 = document.createElement("input");   
    let newInput3 = document.createElement("input");   
    let newInput4 = document.createElement("img");   
    newInput1.value = dropdown;   
    newInput2.value = transcriptionValue;   
    newInput3.value = translationValue;   
    newInput4.src = bin  
    newInput4.className = "img_bin";  
    createDiv.appendChild(newInput1);  
    createDiv.appendChild(newInput2);   
    createDiv.appendChild(newInput3);   
    createDiv.appendChild(newInput4);  
  
    div.appendChild(createDiv);  
    setAddedWords([  
      ...addedWords,  
      { dropdown, transcription: transcriptionValue, translation: translationValue },  
    ]);  

    setAddedWords([
      ...addedWords,
      { dropdown, transcription: transcriptionValue, translation: translationValue },
    ]);

    setDropdown('');  
    setTranscription('');   
    setTranslation('');   
  
    newInput4.addEventListener("click", () => {  
      div.removeChild(createDiv);  
      removeWord(index); // вызываем функцию удаления слова из массива   
})  
  }  
  
  const removeWord = (index) => {
    const newAddedWords = addedWords.filter((word, i) => i !== index); // создаем новый массив, исключая элемент с указанным индексом
    setAddedWords(newAddedWords); // обновляем состояние
  }; 
  
  useEffect(() => {
    // Восстановление данных из локального хранилища при загрузке страницы
    const savedWords = JSON.parse(localStorage.getItem('addedWords'));
    if (savedWords) {
      setAddedWords(savedWords);
    }
  }, []);

  useEffect(() => {
    // Сохранение данных в локальное хранилище при изменении состояния addedWords
    localStorage.setItem('addedWords', JSON.stringify(addedWords));
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
    <div className='string'>
    <div id='input' >  
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
      <button id ="button" onClick={searchDuplicates} className = "button_save">Сохранить</button>  
</div>  
    </div> 
    </div>
 
   
  );  
    }  
export default Body;