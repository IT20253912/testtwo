import { Fragment, useState,useEffect } from "react";
import './App.css'
import Header from "./Components/Header";
import Unit from "./Components/Unit";


const App = () => {

  // const [imgeurl, setimgeurl] = useState('')
  // const [name, setname] = useState('')
  // const [city, setcity] = useState('')
  // const [position, setposition] = useState('')

  const [inputData, setinputData] = useState({
    imageUrl:'',
    name:'',
    city:'',
    position:'',
  })

  const [myData, setmyData] = useState([])
  const [windowWidth, setwindowWidth] = useState(window.innerWidth)
  // first test
  // useEffect(() => {
  //   console.log("use effect calling..");
  // }, [inputData.name]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setwindowWidth(window.innerWidth);
    })
    console.log("use effect calling..")
  })
  


  

  console.log(myData)

  return (
    <Fragment>
      <Header /> 
    <div className="main_container">
      <h1>{windowWidth}</h1>
      <div className="main_left">
        <input type="text" value={inputData.imageUrl} onChange={(e)=>{
            e.preventDefault()
            setinputData(preInput=>({
              ...preInput,
              imageUrl:e.target.value

            }))
        }}/>
        <input type="text" value={inputData.name} onChange={(e)=>{
            e.preventDefault()
            setinputData(preInput=>({
              ...preInput,
              name:e.target.value
            }))
        }}/>
        <input type="text" value={inputData.city} onChange={(e)=>{
            e.preventDefault()
            setinputData(preInput=>({
              ...preInput,
              city:e.target.value
            }))
        }}/>
        <input type="text" value={inputData.position} onChange={(e)=>{
            e.preventDefault()
            setinputData(preInput=>({
              ...preInput,
              position:e.target.value
            }))
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
                image:inputData.imageUrl,
                name:inputData.name,
                city:inputData.city,
                position:inputData.position,
              }
            ]
          })

          // clear text box
          setinputData(pre=>{
            if(pre.imageUrl.length>0){
              return {
                ...pre,
                imageUrl:''
              }
            }else {
              return pre;
            }
          })

          setinputData((pre) => (pre.name.length > 0 ? ({
            ...pre,
            name:''
          }):pre))

          



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
    </Fragment>
  );
}

export default App