
import { createContext, useContext, useEffect, useState } from 'react'
import './App.css'
import Budget from './Budget'
import Expenses from './Expenses';
export const expenceContext = createContext();


function App() {

  const[budget, setBudget] = useState(2000);
  const[remaining , setRemaining] = useState(2000);
  const[spent , setSpent] = useState(0);
  const[expences , setExpences] = useState([]);

  

  function addExpence(name,price){
    setExpences([...expences,{name ,amount: parseInt(price)}])
  }
  console.log(expences);

  useEffect(()=>{
    let amount = 0;
    expences.forEach(((item,index)=>(amount +=item.amount)))

    let rm = budget - amount;
    setSpent(amount);
    setRemaining(rm);

  },[expences])

  // console.log(expences);

  function handelDelete(index){
    // console.log("d");
    let temp = [...expences];
    temp.splice(index,1);
    setExpences(temp);
  };

  function form(e){
    e.preventDefault();
  }

  return (
    <>
    <expenceContext.Provider value={{budget,remaining,spent,form,addExpence,remaining,spent}}>
    <Budget />
    <Expenses />
    </expenceContext.Provider>
    {
      expences.map((item,index) =><Expenses name={item.name} price={item.amount} index={index} handelDelete={handelDelete}/>)
    }
    </>
  )
}

export default App
