import React, {useState} from 'react';
import Header from './components/Header/Header.jsx';
import Body from './components/Body/Body';
import Slider from './components/Slider/Slider';


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

	if (words.length === 0 || currentWordIndex >= words.length) {
		return <div>Слова не найдены</div>;
	}

	return (
		<div className='App'>
			<Header />
			<Body />
			<Slider 
				word={words[currentWordIndex]}
				onNextWord={handleNextWord}
				onPreviousWord={handlePreviousWord}
				setShowTranslation={setShowTranslation}
				showTranslation={showTranslation}
			/>
		</div>
	);
}

export default App;
