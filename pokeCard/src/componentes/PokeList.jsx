import React, { useEffect, useState } from 'react'
import  PokeCard  from './PokeCard'

 const PokeList = ({}) => {


  const [pokemon,setPokemons] = useState(0);

  //   const getpoke = async ()=>{
  //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  //     return response.json();      
  // }
      const [pokelis, setPokelis]= useState(20)

    const getpokeList = async ()=>{

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${pokelis}`);
        setPokelis(pokelis +10);


        return response.json(); 

    }
    
    const listapokemon =()=>{

     getpokeList().then(url =>setPokemons(url))
     console.log(pokemon);
    }

    useEffect(()=>{
      // console.log('dentro');
        getpokeList().then(api => setPokemons(api));
        

    },[]);

    // console.log(pokemon.results);

  return (

    <div className='polist'>  

    {pokemon.results?.map((url)=>{
      

      return(
        
        <PokeCard  endpoint={url.url} nombre={url.name} key={url.name}/> 
      )

    })}

    <button onClick={listapokemon}> agregar 10 mas </button>
    </div>

  )
}

export default PokeList
