import logo from './logo.svg';
import './App.css';
import  { useState } from 'react'

function App() {
  const [firstName,setFirstName] = useState("");
  const [lastName, setLastName]= useState("") ;
  const [fullName,setFullName] = useState("")
  
  const getFirstName = (e) => {
    setFirstName(e.target.value);
  }

  const getLastName = (e) => {
    setLastName(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const fullname = `${firstName} ${lastName}`;
    setFullName(fullname);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <h1>Full Name Display</h1>
      First Name: <input type="text" value={firstName} onChange={getFirstName} required /><br/>
      Last Name: <input type="text" value={lastName} onChange={getLastName} required /><br/>
      <button> Submit </button>
      </form>
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
}

export default App;
