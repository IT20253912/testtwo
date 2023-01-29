import { useState,useEffect } from "react";
import './App.css'



const App = () => {

const [apiID, setapiID] = useState('1')
const [data, setdata] = useState('')
const [search, setsearch] = useState(0)

// console.log(apiID)
// console.log(data)

useEffect(() => {
  console.log('api test')
  console.log("useEffect running");

  const apiCall = async()=> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${apiID}`)
    const data = await res.json()

    if(data){
      setdata(data)
    }
 } 

  if(apiID.length > 0 && (Number(apiID) > 0 && Number(apiID) <= 100)) {
    console.log('useEffect if condition running') 
    apiCall()
  }
  
  // cleanup function
  return () => {
    console.log('cleanup test')
    apiCall();
    
  }
}, [search])


// console.log(apiID)

  return (
    <div>
      <input type='text'
      placeholder="Enter ID"
      value={apiID}
      onChange={
        (e)=>setapiID(e.target.value)
      }
      />
      <button
      onClick={()=>setsearch(pre=>pre===0?1:0)}
      >Submit</button>
      <br />
      <br />

      {/* <h3>{data.title}</h3>
      <h6>{data.body}</h6> */}

      {/* check data available or not */}
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      )}

    </div>
  )


}
  
export default App