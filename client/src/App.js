import React from 'react';
import Header from './components/Header';
import HeroSection from './components/Herosection';
import URLshortnertool from './components/URLshortnertool';
import Details from './components/Details';
import PreviousURLs from './components/PreviousURLs';
import Footer from './components/Footer';
import './App.css';
function App() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <URLshortnertool/>
      <Details/>
      <br></br>
      <br></br>
      <PreviousURLs/>
      <Footer/>
    </div>
    
  );
}
export default App;