
import './App.css';
import React, { useEffect, useState } from "react";
import Main from './Components/Main';
import myData from './Data/myData';

function App() {

const [name, setname] = useState({
  sname: "chathu",
  city: "apura",
  position: "web developer"
})

const [myDataState, setmyDataState] = useState(myData)

 const click = () =>{
  // setname("smana")
  setname({
    ...name,
    sname:"fuck",
    city:"newCity"
  })

  setmyDataState([
    ...myDataState,
    {
      id:'5',
      name:'name5',
      city:'city5',
      position:'pos5'
    }
  ])

 }

 console.log(name)
 console.log(myDataState)

 const Test = myDataState.map(({id, name,city,position},index) => {
  return (
    <Main key={id+index} name={name} city={city} position={position}/>  
  );
})

  return (
    <div>
      <h1>chathudu</h1>
      <h2>{name.sname}</h2>
      <h2>{name.city}</h2>
      {/* <Main /> */}
      {Test}
      <button

      style={{
        fontSize:"12px",
        order: "1px solid red",
        padding: "7px 12px",
    }}
      
      onClick={click}
      >
        click
      </button>
    </div>
  );
}

export default App;
