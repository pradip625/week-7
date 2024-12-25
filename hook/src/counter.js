import React from "react";
import "./App.css";
import { useState } from 'react';
function Hook_ControlledButtonState(){
    const ClickHandle=() =>
        {
        setCount(count + 1)
        }
        const [count, setCount] = useState(0);
        return (
        <div className="App-header">
        <form>
        <h1>Number of Clicked Counts are {count}</h1>
        <button type= "button" onClick={ClickHandle}>Click here{count} </button>
 </form>
 </div>
 );
}
export default Hook_ControlledButtonState