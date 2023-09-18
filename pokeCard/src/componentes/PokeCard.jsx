import React, {  useEffect, useState } from "react";


const PokeCard = ({nombre,endpoint}) => {
  
  const [pokemons,setPokemons] = useState(0);

  const getpoke = async ()=>{    

    const response = await fetch(endpoint);
    // console.log(endpoint);
    return response.json();    

}
 
useEffect(() => {
  getpoke()
  .then(data=>setPokemons(data))

}, [])

console.log(pokemons);


  return (

    <div> 

      <div className="selectElement">

        <p> {pokemons.name} </p> 
        <p> {pokemons.id} </p>

      </div>

      <div className="pokedivs" >       
            
             <img src={pokemons.sprites?.other.dream_world.front_default}  alt="pokemon" style={{width:'80px'}}/>

      </div>


    </div>


  )
}

export default PokeCard

