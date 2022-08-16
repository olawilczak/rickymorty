
import './App.css';
import Navigation from './Navigation';
import { useState } from 'react';
import CharacterList from './CharacterList';
import Todo from './Todo';
import Contact from './Contact';
import AboutMe from './AboutMe';

const DATA = {
  name: 'Ola',
  lastName:'Wilczak',
  description:'Cześć jestem Ola i mam 26 lat',
  img: 'images/foto.jpg'
};

function App() {
  const[write,setWrite]=useState('Logo')
  const[menu,setMenu]=useState()
  
  return (
    <div className="App">
      <Navigation logo={write}
      changes={setMenu}
      />
      <div>
            {menu === 'AboutMe' && <AboutMe person={DATA}></AboutMe>}
            {menu === 'CharacterList' && <CharacterList/>}
            {menu === 'Todo' && <Todo/>}
            {menu === 'Contact' && <Contact/>}

        </div>
    </div>
  );
}

export default App;
