import React, { useContext, useState } from 'react'
import { expenceContext } from './App'

const Budget = () => {
const {budget,remaining,spent}=useContext(expenceContext);
const[name,setName] = useState("");
const[price,setPrice] = useState();

const {addExpence}=useContext(expenceContext);

  return (
    <>
    <div id="bBody">
    <div>
      <h1>My Budget Plnner</h1>
      <br />
      <div id="output">
        <h2>Budget :{budget}</h2>
        <h2>Remaining :{remaining}</h2>
        <h2>Spant so far : {spent}</h2>
      </div>
    </div>

    <form 
    onSubmit={(e)=>{
        e.preventDefault();
        
        addExpence(name,price);
    }}
    >
    <div id="add">
        <div className="name">
            <p>Name</p>
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
        </div>

        <div className="cost">
            <p>Cost</p>
            <input type="number" onChange={(e)=>setPrice(e.target.value)} />
        </div>
    </div>
    <button type='submit'>Save</button>
    </form>
    </div>
    </>
  )
}

export default Budget
