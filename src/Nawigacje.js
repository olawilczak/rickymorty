import React, {useState,useEffect} from 'react'
import Kontakt from './Kontakt';
import ListaPostaci from './ListaPostaci';
import OMnie from './OMnie';
import Todo from './Todo';

const names = ['O mnie','Lista postaci','Todo','Kontakt']
const Nawigacje = ({logo,changes}) => {
    const handleButtonClick = (dupa) => {
        changes(dupa)
    }
    const isAvailable = 'OMnie'
    return (
        <>
        <div>
            {isAvailable === 'OMnie' && <div>OMnie</div>}
            {isAvailable === 'ListaPostaci' && <div>ListaPostaci</div>}
            {isAvailable === 'Todo' && <div>Todo</div>}
            {isAvailable === 'Kontakt' && <div>Kontakt</div>}

        </div>
        <div>{logo}</div>
 <div>
    {names.map((item)=>(
        <div>
            <button onClick={()=>handleButtonClick(item)}>{item}</button>
        </div>
    ))}
 </div>
 </>
)}


export default Nawigacje;
