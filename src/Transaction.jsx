import React from 'react'
import table1 from './assets/css/table1.css'

function Transaction({description,amount,category,date,id}){
  return (
    <>
    <table className='table1'>
    
      <tbody>
        <tr>
          <td>{date}</td>
          <td>{description}</td>
          <td>{category}</td>
          <td>{amount}</td>
        </tr>
     
      

      </tbody>
    
    </table>
      
      </>
  )
}
export default Transaction
