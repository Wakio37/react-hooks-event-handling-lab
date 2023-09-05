// Code Keypad Component Here
import React from "react";

function EyesOnMe (){
    const handleFocus=(event)=>{
        console.log('Good!')
    }

    const handleBLur=(event)=>{
        console.log('Hey! Eyes on me!')
    }
    return (
        <React.Fragment>
            <button onFocus={handleFocus} onBlur={handleBLur}>Eyes on me</button>
       </React.Fragment>
    )
}

export default EyesOnMe