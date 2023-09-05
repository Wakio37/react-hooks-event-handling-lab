// Code Keypad Component Here
import React from "react";

function Keypad (){
    const handleEvent=(event)=>{
        console.log('Entering password...')
    }
    return (
        <React.Fragment>
            <input type="password" onChange={handleEvent}/>
       </React.Fragment>
    )
}

export default Keypad;