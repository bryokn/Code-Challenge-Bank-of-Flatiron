import React, { useState, useEffect } from 'react'; 
import TransactionList from './TransactionList';
import NewTransactions from './NewTransactions';
import './App.css';

function App() {
  const [allTransactions, setAllTransactions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch(`https://bank-flatiron3.onrender.com/transactions/?q=${searchQuery}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setAllTransactions(data);
      })
      .catch(error => console.error(error));
  }, [searchQuery]);

  function handleSearch(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <div className="App">
      <h1>Bank of Flatiron</h1>
      <h2>New Transaction</h2>
      <div>
        <input
        id="input"
        type='text'
        placeholder='search.........'
        onChange={handleSearch}

        />
        <button id='searchButton'>Search here</button>
      </div>
      <NewTransactions addTransaction={allTransactions} />
      {/* <SearchBar searchTerm={searchTerm} onSearchChange={handleSearch} /> */}
      <TransactionList transactions={allTransactions} />
      

    </div>
  );
}

export default App;