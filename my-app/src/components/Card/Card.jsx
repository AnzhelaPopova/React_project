import React, { useState, useEffect, useRef } from 'react';
import './Card.css';

export default function Card({ word, setShowTranslation, showTranslation }) {
  const [wordCount, setWordCount] = useState(0);
  const translationButtonRef = useRef(null);

  useEffect(() => {
    if (showTranslation) {
      setWordCount(prevCount => prevCount + 1);
    }
  }, [showTranslation]);

  useEffect(() => {
    if (!showTranslation) {
      translationButtonRef.current.focus();
    }
  }, [showTranslation]);

  const handleTranslationClick = () => {
    setShowTranslation(true);
  };

  const handleButtonBlur = () => {
    if (!showTranslation) {
      translationButtonRef.current.focus();
    }
  };

  return (
    <div className="card">
      <div className="card_item">
        <p className="text text_english">
          {word.english}
        </p>
        <p className="text">
          {word.transcription}
        </p>
        {showTranslation ? (
          <p className="text">
            {word.russian}
          </p>
        ) : (
          <button className="button_translation" ref={translationButtonRef} onClick={handleTranslationClick} onBlur={handleButtonBlur}>
            Показать перевод
          </button>
        )}
      </div>
      <p>Счетчик слов: {wordCount}</p>
    </div>
  );
}

Card.defaultProps = {
  english: 'default word',
  russian: 'default translate',
  setShowTranslation: () => {},
  showTranslation: false,
};