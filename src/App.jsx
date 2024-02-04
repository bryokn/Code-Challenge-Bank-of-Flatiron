import { useEffect, useState } from 'react'
//import Table from './Bodytable'
import Transaction from './Transaction'
import Headers from './Headers'
import { Tableheaders } from './Tableheaders'
// import SearchBar from './SearchBar'
import inputField from './assets/css/inputField.css'

function App() {

  // initializing constants for capturing data from database and input values
  const[data,setData]= useState([])
  const[amount,setAmount]= useState(0)
  const[category,setCategory]= useState("")
  const[date,setDate]= useState("")
  const[description,setDescription]= useState("")
  const[search,setSearch]=useState("")
  const[searchAmount,setSearchAmount]=useState("")
  console.log(searchAmount)
  
 

  useEffect(()=>{
     fetch("http://localhost:3000/transactions")
    .then(res=>res.json())
    .then(transactions=>{
      // setData(transactions)
      setData(transactions)
   })

   },[])
   function handleSubmit(e){
    e.preventDefault()
    let transObj={
    amount: amount,
    description: description,
    category: category,
    date: date

    }
    fetch("http://localhost:3000/transactions",{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(transObj)
    })
    .then(res=>res.json())
    .then(transaction=>{
      let newTransaction = [...data,transaction]
      setData(newTransaction)
      })
      // setData(transactions)
     // setData(transactions)
   }

  return (
   <>
   <table className='table3'>
   <h1><Headers/></h1>


{/* the search section. handles the seach by category and amount*/}
   <table className='table3'>
        <tbody>
            
            <tr>
                <td>
                  {/* onchange handles inputs */}
                    <input onChange={(e)=>setSearch(e.target.value)} type='text' placeholder='Search Category'/>
            
                </td>

                <td>
                    <input type ='number' onChange={(e)=>setSearchAmount(e.target.value)} placeholder='Search Amount'/>
                </td>
            </tr>
            
            </tbody>
        
    
       
       

    
    </table>
    
   
   
   <div > 
   
    <form onSubmit={handleSubmit}>
      <table className='inputField'>
        <tbody>
       
        <tr>
          
          <td>
            <input type ='date'  value={date} onChange={(e)=>setDate(e.target.value)}/>
            </td>
    
          <td>
            
            <input placeholder='Input description' value={description} onChange={(e)=>setDescription(e.target.value)}/>
            </td>

            <td>
            <input placeholder='Input category' value={category} onChange={(e)=>setCategory(e.target.value)}/>

            </td>

            <td>
            <input type='number' placeholder='Input amount' value={amount} onChange={(e)=>setAmount(e.target.value)} />
            </td>

            <td>

            <button className='submit'>Add Transaction</button>

            </td>
      
        </tr>
        </tbody>
    
      </table>
    </form>
  </div>

  <h2><Tableheaders /></h2>
   {data.filter((transaction)=>
   {
    return search.toLowerCase() === '' ? transaction : transaction.category.toLowerCase().includes(search) 

   return searchAmount=== '' ? transaction : transaction.amount.includes(searchAmount)

   }
  
   
    )
    .map(transaction=> (

    <Transaction description ={transaction.description} category={transaction.category}date={transaction.date}amount={transaction.amount}  key={transaction.id}/>
   ))}

   
   </table>
   </>
)
}

export default App
