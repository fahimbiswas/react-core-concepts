import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$9.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I am a React Person</p>
        <Users></Users>
        <Counter></Counter>
        {
          products.map(product => <Product product={product}></Product>)
        }
        <Person name="Arjun" job="Actor"></Person>
        <Person name="Ram" job="Actor"></Person>
        <Person name="NTR" job="Actor"></Person>
        <Person name="Provas" job="Actor"></Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] =useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  })
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name} {user.phone}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'300px',
    width:'300px',
    float:'left'
  }
  return (
    <div style={productStyle}>
      <h2>Name: </h2>
      <h1>Price: </h1>
      <button>Buy now</button>
    </div>
  )
}

function Person(props){
  return (
    <div style={{border:'2px solid purple', width:'400px', margin:'10px'}}>
      <h3>My name: {props.name}</h3>
      <p>My Profession: {props.job}</p>
    </div>
  )
}

export default App;
