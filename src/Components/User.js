import { useParams } from "react-router-dom"
import React, { useState, useEffect } from 'react';

const User = () => {

    const { id } = useParams();
    console.log(id)

    const [data, setdata] = useState({})
    console.log(data)


    useEffect(() => {
    
        const getData = async () =>{
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const data = await res.json()
            if(data){
                setdata(data)
            }
        }
        getData()
      return () => {
        getData()
      }
    }, [id])
    
  return (
    <div>
        User Page
        {/* <h5>{id}</h5> */}
        {/* <h4>{data.title}</h4> */}
        {data?
        <div>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
        </div>:null}
    </div>
  )
}

export default User