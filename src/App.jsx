import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutUs/>
      <Footer />
    </div>
  );
}

export default App;
