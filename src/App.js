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
  const[menu,setMenu]=useState('OMnie')
  const data = {
    name: 'Ola',
    lastName:'Wilczak',
    description:'Cześć jestem Ola i mam 26 lat',
    img: 'images/foto.jpg'
  }
  return (
    <div className="App">
      <Nawigacje logo={write}
      changes={setMenu}
      />
      <OMnie person = {data}></OMnie>
      <div>
            {menu === 'OMnie' && <div>OMnie</div>}
            {menu === 'ListaPostaci' && <div>ListaPostaci</div>}
            {menu === 'Todo' && <div>Todo</div>}
            {menu === 'Kontakt' && <div>Kontakt</div>}

        </div>
    </div>
  );
}

export default App;
