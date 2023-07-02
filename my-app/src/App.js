import React from 'react';
import Header from './components/Header/Header.jsx';
import Card from './components/Card/Card';
// import Footer from './components/Footer/footer';
import Body from './components/Body/Body';
import './App.css'; 
// import Slider from './components/Slider/Slider';


function App() {

  return (
    <div className="App">
      <Header/> 
      <Body/>
      <Card/>
      {/* <Slider/> */}
      {/* <Footer/> */}
        
    </div>
  );
}

export default App;
