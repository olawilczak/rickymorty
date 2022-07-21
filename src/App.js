import logo from './logo.svg';
import './App.css';
import Nawigacje from './Nawigacje';
import { useState } from 'react';
import ListaPostaci from './ListaPostaci';
import Todo from './Todo';
import Kontakt from './Kontakt';
import OMnie from './OMnie';

function App() {
  const[write,setWrite]=useState('Logo')
  const[menu,setMenu]=useState()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Nawigacje logo={write}
      changes={setMenu}
      />
      <OMnie
      name = 'Ola'
      lastName='Wilczak'
      description='Cześć jestem Ola i mam 26 lat'
      img = 'images/foto.jpg'
      ></OMnie>
    </div>
  );
}

export default App;
