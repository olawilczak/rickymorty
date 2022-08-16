import React, {useState,useEffect} from 'react'
import axios from 'axios'

function CharacterList() {
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

    return (
        <>
<div>{state.map((a)=>{
          return (<div>{a.gender}</div>)
        })}</div>
<div>{state.map((b)=>{
        return (<div>{b.name}</div> )
        })}</div>
        </>
    )
}





export default CharacterList;