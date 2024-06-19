import React, { useContext } from 'react'

const Expenses = ({name,price,index,handelDelete}) => {


  return (
    <div id='row'>
      <p>{name}</p>
      <p>{price}</p>
      <button onClick={()=>handelDelete(index)}>-</button>
    </div>
  )
}

export default Expenses
