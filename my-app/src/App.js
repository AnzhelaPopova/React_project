import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Table from './components/Table/Table';
import styles from './components/Slider/Slider.css';


// import Card from './components/Card/Card';
import Slider from './components/Slider/Slider';
import Footer from './components/Footer/Footer';

function App() {
  const words = [
		{english: 'word1', russian: 'слово1'},
		{english: 'word2', russian: 'слово2'},
		{english: 'word3', russian: 'слово3'},
	];
	const [currentWordIndex, setCurrentWordIndex] = useState(0);
	const [showTranslation, setShowTranslation] = useState(false);

	const handleNextWord = () => {
		setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
		setShowTranslation(false);
	};

	const handlePreviousWord = () => {
		setCurrentWordIndex((prevIndex) => {
			if (prevIndex === 0) {
				return words.length - 1;
			}
			return prevIndex - 1;
		});
		setShowTranslation(false);
	};
	
  return (
    <BrowserRouter>
      <div className='App'>
	  <Header />
		<div>
			<Routes>
				<Route path="/React-project" element={<Table />} />
				<Route path="/" element={<Table />} />
				<Route path="/card" element={   <Slider className={styles.card_container}
				word={words[currentWordIndex]}
				onNextWord={handleNextWord}
				onPreviousWord={handlePreviousWord}
				setShowTranslation={setShowTranslation}
				showTranslation={showTranslation}
			/>} />
				<Route path="/words" element={<Body />} />
			</Routes>	
		</div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;