import React, { useState } from 'react';

function NewTransactions () {

const [isClicked, setIsClicked] = useState({
  date:"",
  description:"",
  category:"",
  amount:""
})
 const handleChange = (e) => {
  console.log(e.target.value)
  setIsClicked({
      ...isClicked,
      [e.target.name] : e.target.value,   
  })
}


const handleSubmit = (e) => {
  e.preventDefault()
  fetch('https://bank-flatiron3.onrender.com/transactions/',{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(isClicked),
      

  })
  window.location.reload() 

}
return (
  <form onSubmit={handleSubmit} className = "forminput">
      <input id = "inputtransaction" name='date' type="date" onChange={handleChange}  />
      <input id = "inputtransaction" type="text" name='description' placeholder='Description' onChange={handleChange} />
      <input id="type" placeholder= "Category" name='category' onChange = {handleChange} />
      <input id = "inputtransaction" type="number" name='amount' placeholder='Amount' onChange={handleChange}  />
      <button id = "newtransactions" type="submit" onSubmit={handleSubmit}>Send Transaction</button>
  </form>
)
}

export default NewTransactions;

