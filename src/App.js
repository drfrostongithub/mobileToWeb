import * as React from "react";
import Header from "./components/_jsapp/Header";
import Body from "./components/_jsapp/Body";
import Body2 from "./components/_jsapp/Body2";
import Body3 from "./components/_jsapp/Body3";
import Footer from "./components/_jsapp/Footer";
import "./App.scss";

function App() {
  return (
    <div className='App'>
      <div id='background1'>
        <Header />
        <Body />
      </div>
      <div id='background2'>
        <Body2 />
      </div>
      <div id='background3'>
        <Body3 />
      </div>
      <Footer />
    </div>
  );
}

export default App;
