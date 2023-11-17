import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Wave from 'react-wavify'

function App() {

  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Body />
        {/* <div style={{ display: 'flex', position: 'relative' }}>
          <Wave fill='rgb(210, 217, 208)'
            paused={false}
            options={{
              height: 20,
              amplitude: 20,
              speed: 0.15,
              points: 3
            }}
            style={{ position: 'absolute', bottom: 0 }} />
          <Wave fill='rgba(240, 217, 208, 0.5)'
            paused={false}
            options={{
              height: 30,
              amplitude: 30,
              speed: 0.1,
              points: 5
            }}
            style={{ position: 'absolute', bottom: 0 }} />
        </div> */}
        <Footer path="/contacts" style={{ position: 'relative' }} />
      </div>

    </BrowserRouter>
  );
}

export default App;
