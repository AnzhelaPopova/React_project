
import React, { useState } from 'react';
import styles from './Slider.css';
import arrowleft from '../../assets/images/left-arrow.png';
import arrowright from '../../assets/images/right-arrow.png';
import Card from '../Card/Card';

const response = await fetch('http://itgirlschool.justmakeit.ru/api/words');
const data = await response.json();

function CardList() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
   
    
  
    const handleNextWord = () => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1));

      if (currentWordIndex === data.length - 1) {
        setCurrentWordIndex(0);
      }
      
    };
    const handlePreviousWord = () => {
        let newIndex = currentWordIndex - 1;
        if (newIndex < 0) {
          newIndex = data.length - 1;
        }
        setCurrentWordIndex((newIndex));
    
      };
     
    return (
      <div className={styles.card_container}>
        <div>
        <button className={styles.nextBtn} onClick={handlePreviousWord}>
        <img src={arrowleft} alt="close icon to cancel editing" />
        </button>
        </div>
        
        <Card/>
        
        <div>
        <button className={styles.nextBtn} onClick={handleNextWord}>
        <img src={arrowright} alt="close icon to cancel editing" />
        </button>
        </div>
       
      </div>
    );
  }
  
  export default CardList;
  