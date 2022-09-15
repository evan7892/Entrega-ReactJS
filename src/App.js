
import React, { Components } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import logo from './components/img/logo.png'
import CartWidget from './components/navbar/CartWidget';
import ItemListContainer from './products/ItemListContainer';

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
      <ItemListContainer greeting="Tienda de perifericos gamer"/> 
      <header className='App-header'>
        <h1 style = {styleH1}>{title}</h1>
        <button>Click me</button>
      </header>
      <Footer />
    </div>
  );
}


      export default App;
