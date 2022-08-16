import React from 'react'


const AboutMe = ({person}) => {

    return (
    <>
    <img src={person.img} alt='Ola śpi'></img>
    <h1>{person.name}</h1>
    <h2>{person.lastName}</h2>
    <p>{person.description}</p>
    </>
)}





export default AboutMe;