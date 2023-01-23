
import './App.css';
import Main from './Components/Main';
import myData from './Data/myData';


const Test = myData.map(({id, name,city,position}) => {
  return (
    <Main key={id} name={name} city={city} position={position}/>  
  );
})




function App() {
  return (
    <div>
      <h1>chathudu</h1>
      {/* <Main /> */}
      {Test}
    </div>
  );
}

export default App;
