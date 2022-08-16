import React from 'react'


const NAMES = ['O mnie','Lista postaci','Todo','Kontakt']
const Navigation = ({logo,changes}) => {
    const handleButtonClick = (dupa) => {
        changes(dupa)
    }
    return (
        <>
        <div>{logo}</div>
 <div>
    {NAMES.map((item)=>(
        <div>
            <button onClick={()=>handleButtonClick(item)}>{item}</button>
        </div>
    ))}
 </div>
 </>
)}


export default Navigation;
