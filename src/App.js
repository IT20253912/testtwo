
import './App.css';
import React, { useEffect, useState } from "react";
import Main from './Components/Main';
import myData from './Data/myData';


const Test = myData.map(({id, name,city,position}) => {
  return (
    <Main key={id} name={name} city={city} position={position}/>  
  );
})




function App() {

  // const name = 'saman'

 const [name, setname] = useState("chathudu")

 const click = () =>{
  setname("smana")
 }

 console.log(name)



  return (
    <div>
      <h1>chathudu</h1>
      <h2>{name}</h2>
      {/* <Main /> */}
      {Test}
      <button
      
      onClick={click}
      >
        click
      </button>
    </div>
  );
}

export default App;
