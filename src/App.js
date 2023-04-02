import Header from './Header'
import React from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  return (
	<div>
	  <Header name="Texte React" links={["Sobre","Comprar","Contato","Login"]}></Header>
	  <Counter count={0}></Counter>
	  </div>
  );
}

export default App

