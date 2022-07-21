import React, {useState,useEffect} from 'react'


const OMnie = ({name,lastName,description,img}) => {

    return (
    <>
    <img src={img} alt='Ola śpi'></img>
    <h1>{name}</h1>
    <h2>{lastName}</h2>
    <p>{description}</p>
    </>
)}





export default OMnie;