
import './App.css';
import Main from './Components/Main';

const myobj = [
  {
    name:'name1',
    city:'city1',
    position:'pos1'
  },
  {
    name:'name2',
    city:'city2',
    position:'pos2'
  },
  {
    name:'name3',
    city:'city3',
    position:'pos3'
  },
  {
    name:'name4',
    city:'city4',
    position:'pos4'
  }
]

function App() {
  return (
    <div>
      <h1>chathudu</h1>
      {/* <Main /> */}
      {
        myobj.map((ele) => {
          return (
            <Main name={ele.name} city={ele.city} position={ele.position}/>
            
            
          );
        })
      }
     
      
    </div>
  );
}

export default App;
