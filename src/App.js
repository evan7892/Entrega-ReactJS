import React from 'react'
import ReactDom from 'react.dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import logo from './components/img/logo.png'

function App() {
let styleH1 = {
  color : "white",
  marginTop : "100px",
 } ;
  let title = "Bienvenido a Elite Gaming"

  return (
    <div className='App'>
      <div>
      <img src={logo} width="80px"/>
      </div>
      <Navbar />
      <header className='App-header'>
        <h1 style = {styleH1}>{title}</h1>
        <button>Click me</button>
      </header>
      <Footer />
    </div>
  );
}


      export default App;
