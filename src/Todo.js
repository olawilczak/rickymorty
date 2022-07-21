import React, {useState,useEffect} from 'react'


const Todo = (() => {
    const Single = (()=>{
        const newClick = () => {

        }
        return (
            <>
            <button onClick={newClick}></button>
            </>
        )
    })

    const[data,setData]=useState([])
    const[text,setText]=useState()

    const handleClick = () => {
        setData(prev=>[...prev,text]) }

    const newText = (event) => {
        setText(event.target.value)
    }
    const removeClick = () => {
       setData(data.filter((element) => element !== text))
        
    }
    return (
    <>
    <input type='text' placeholder='text' onChange={newText}></input>
   <button onClick={handleClick}>Click me</button>
   {data.length > 0 &&
    <ul>
        {data.map((el)=>(
            <li onClick={removeClick}>{el}</li>
        ))}
    </ul>}
    </>
)})





export default Todo;