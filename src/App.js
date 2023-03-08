import  React from 'react';
import './App.css';
import Header from './elements/Header/';
import Banner from './elements/Banner';
import Home from './home';
import Footer from './elements/Footer';

export default function App() {
  return (
   <div className="App">
      <Header />
      <Banner />
      <Home />
      <Footer />
   </div>
  );
}
