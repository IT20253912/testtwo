import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {

    const [mainData, setmainData] = useState([])

    useEffect(() => {
      const datafetch = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
        const data = await res.json()
        if(data){
            setmainData(data)
            //console.log(data);
        }
      }
      datafetch()
    
   
    }, [])

    
  return (
    <div>Contact
        <h1>efe</h1>
        <div>
        
        {mainData?.map(({ id, title}) => (
            <Link to = {`/contact/${id}`} key={id}>
                <div>
                    <h3>{title}</h3>
                   console.log(title)
                </div>
            </Link>
        ))}
        </div>

        
    </div>
  )
}

export default Contact