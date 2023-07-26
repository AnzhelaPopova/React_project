import React from 'react';
import styles from './Slider.css';
import arrowleft from '../../assets/images/left-arrow.png';
import arrowright from '../../assets/images/right-arrow.png';
import Card from '../Card/Card';
import './Slider.css'; 


function Slider({ word, onNextWord, onPreviousWord, showTranslation, setShowTranslation }) {
  return (
    <div className="card_container">
      <div className='align_button'>
        <button className={styles.nextBtn} onClick={onPreviousWord}>
          <img src={arrowleft} alt="left arrow" />
        </button>
      </div>
      <Card word={word} setShowTranslation={setShowTranslation} showTranslation={showTranslation}/>
      <div className='align_button'>
        <button className={styles.nextBtn} onClick={onNextWord}>
          <img src={arrowright} alt="right arrow" />
        </button>
      </div>
    </div>
  );
}

export default Slider;
