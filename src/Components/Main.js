// const name = 'saman'
// const age = 'ten'

// const myobj = {
//     age:`${age}`,
//     city:'apura'

// }

function Main({name,city,position}){

    console.log(name)
    //console.log(props)
    return (
        <div>
            <h1>main Componenets</h1>
            <p>{name}</p>
            <p>{city}</p>
            <p>{position}</p>
           
        </div>
    )
}

export default Main;