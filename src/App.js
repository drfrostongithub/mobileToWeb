import * as React from 'react'
import Header from './components/_jsapp/Header'
import Body from './components/_jsapp/Body'
// import Body2 from './components/_jsapp/Body2'
import Footer from './components/_jsapp/Footer'

import './App.scss'

function App() {
  return (
    <div className="App">
      {/* <div id="background1"></div> */}
      <Header />
      <Body />
      {/* <Body2 /> */}
      <Footer />
    </div>
  );
}

export default App;
