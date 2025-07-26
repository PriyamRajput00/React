



const Person = (props) => {
  return (
    <div>
        <img src = {props.img} alt = {props.image} width = {500}/>
        <h1>Name : {props.Name}</h1>
        <p>Age : {props.Age}</p>
        <p>FavFruits : {props.favfruits}</p>
    </div>
  )
}

export default Person

