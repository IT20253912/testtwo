import { useState } from "react";
import './App.css'
import Unit from "./Components/Unit";


const App = () => {

  const [imgeurl, setimgeurl] = useState('')
  const [name, setname] = useState('')
  const [city, setcity] = useState('')
  const [position, setposition] = useState('')

  const [myData, setmyData] = useState([])

  console.log(myData)

  return (
    <div className="main_container">
      <div className="main_left">
        <input type="text" value={imgeurl} onChange={(e)=>{
            e.preventDefault()
            setimgeurl(e.target.value)
        }}/>
        <input type="text" value={name} onChange={(e)=>{
            e.preventDefault()
            setname(e.target.value)
        }}/>
        <input type="text" value={city} onChange={(e)=>{
            e.preventDefault()
            setcity(e.target.value)
        }}/>
        <input type="text" value={position} onChange={(e)=>{
            e.preventDefault()
            setposition(e.target.value)
        }}/>
        <button onClick={()=>{
          // console.log({
          //   imgeurl,
          //   name,
          //   city,
          //   position,
          // })
          setmyData((pre)=>{
            return [
              ...pre,
              {
                image:imgeurl,
                name,
                city,
                position,
              }
            ]
          })

          setimgeurl(pre=>{
            if(pre.length>0){
              return ''
            }else {
              return pre;
            }
          })

          setname(pre=>{
            if(pre.length > 0){
              return ''
            }else{
              return pre
            }
          })

          setcity(pre=>{
            if(pre.length > 0){
              return ''
            }else {
              return pre
            }
          })

          setposition(pre=>{
            if(pre.length > 0) {
              return ''
            }else {
              return pre
            }
          })



        }}>Submit</button>
      </div>
      <div className="main_right">
        {myData?.map(({image,name,city,position},index)=><Unit
        image={image}
        name={name}
        city={city}
        position={position}
        key={index} />
        )}
      </div>
    </div>
  );
}

export default App