import React, {useState} from 'react'

const Contact = () => {
    const [state, setState] = useState([{ email: "", text: "" }]);
    const[text,setText]=useState()

    const sendData = (event) => {
        setText(event.target.value)
     }

    const handleChange = e => {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));

       
    };
    return (
    <>
        <input
            value={state.email}
            type="text"
            onChange={handleChange}
            name="email"
        />
        <input
            value={state.text}
            type="text"
            onChange={handleChange}
            name="text"
        />
        <div>{state}</div>
        <button onClick={sendData}>Wyślij</button>
        {state.length > 0 &&
    <ul>
        {state.map((el)=>(
            <li>{el}</li>
        ))}
    </ul>}
    </>
)}



export default Contact;