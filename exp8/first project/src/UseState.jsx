
import "./App.css";
import React,{useState} from 'react'

function UseState() {
    const[counter,setCounter]=useState(0);

    const increment=()=>{
        setCounter(counter+1);
    }
    const decrement=()=>{
        setCounter(counter-1);
    }
    const reset=()=>{
        setCounter(0);
    }
  return (
    <div>
    <h1>{counter}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <button onClick={reset}></button>
    
    </div>
  );
}

export default UseState