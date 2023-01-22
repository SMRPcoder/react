import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



function App() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [loged,setLoged]=useState([]);

  const Aftersubmit=()=>{
    const navigate=useNavigate();
    useEffect(()=>{
      navigate('/home');
    })
 
  }

  const onsubmit=(event)=>{
    event.preventDefault();
    const {uname,pass}=document.forms[0]
    setEmail(uname.value)
    setPassword(pass.value)
    axios.post('http://localhost:4000/user/login',{
      email:uname.value,
      password:pass.value
    }).then(data=>{
      setLoged(data.data);
      if(data.data.status===true){
        Aftersubmit();
      }
    })
  }
  return (
    <div className="App">
      <h1>Login</h1>
      <form onSubmit={onsubmit}>
        <input placeholder='email' name='uname'/>
        <input placeholder='password' name='pass'/>
        <button type='submit'>login</button>
      </form>
      <div>{loged.message}</div>
    </div>
  );
}

export default App;
