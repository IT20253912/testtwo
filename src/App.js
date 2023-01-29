import { useState,useEffect } from "react";
import './App.css'



const App = () => {

  const [apiId, setapiId] = useState('')
  const [data, setdata] = useState({})

  console.log(apiId)
  console.log(data)

  useEffect(() => {
    console.log('useEffect running')

    const apiCall = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${apiId}`
      )
      const data = await res.json()

      if(data) {
        setdata(data)
      }
    }

    if(apiId.length > 0 && Number(apiId) > 0 && Number(apiId) <= 100) {
      console.log("use effect if condition")
      apiCall();
    }
    return () => {
      console.log('clean')
      apiCall()
    }

  }, [apiId])
  
  return(
    <div>
      <input type='text' 
      value={apiId} 
      onChange={(e)=>setapiId(e.target.value)} 
      placeholder='Enter ID' />

        {data && (
          <div>
            <h2>{data.title}</h2>
            <h6>{data.body}</h6>
          </div>
        )}




    </div>
  )
}
  
export default App