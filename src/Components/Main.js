const name = 'saman'
const age = 'ten'

const myobj = {
    age:`${age}`,
    city:'apura'

}

function Main(props){
const {city} = myobj

    console.log(props)
    return (
        <div>
            <h1>main Componenets</h1>
            <p>{name}</p>
            <p>{myobj.age}</p>
            <p>{city}</p>
            {props.children}
        </div>
    )
}

export default Main;