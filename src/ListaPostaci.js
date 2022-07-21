import React, {useState,useEffect} from 'react'
import axios from 'axios'

function ListaPostaci() {
    const [state, setState] = useState([])
    const getCharacters = async () => {
      try {
        const result = await axios.get('https://rickandmortyapi.com/api/character')
        setState(result)
      } catch(e) {
        console.error(e)
      }
    }

    useEffect(() => {
      getCharacters()
    }, []);

    const Gender = () => {
      return (
        <div>{state.map((a)=>{
          return (<div>{a.gender}</div>)
        })}</div>
      )
    }

    const Name = () => {
      return (
        <div>{state.map((b)=>{
        return (<div>{b.name}</div> )
        })}</div>
      )
    }


    return (
        <>
<div>{Gender}</div>
<div>{Name}</div>
        </>
    )
}





export default ListaPostaci;