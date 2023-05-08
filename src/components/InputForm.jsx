import { useState } from "react"
import React from 'react'



  export default function InputForm() {
    const [count, setCount] = useState(75)
    function handleClick(){
        setCount(count+35);
        }
        
    return (
    <div>
        <div>
        <button onClick={handleClick}>Your total is ${count}</button>
        </div>
       
    </div>
    
  )
}


