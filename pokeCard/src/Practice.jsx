import React, { useEffect, useState } from 'react'
import PokeList from './componentes/PokeList'
import PokeCard from './componentes/PokeCard';

export const Practice = ({handleClick,id,pokeid,id2}) => {

  const [pokeList,setPokeList] = useState([]);

  const getpokemon = async (id)=>{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = response.json();
    console.log( data);
  }
useEffect(()=>{
  const fetchPokemon = async ()=>{
    const pokemons1 = await getpokemon(pokeid);
    const pokemons2 = await getpokemon(id2);
    setPokeList([pokemons1,pokemons2]);
  }
  fetchPokemon();
},[pokeid,id2])

  return (
        <div className="sprint">
            <button onClick={handleClick}  > soy un boton {id} </button>
            {/* {pokeList.map((pokemon)=>(<PokeCard key={pokemon.id} id={pokemon.id} name={pokemon.name}>  </PokeCard>))} */}
        </div>
      )
}
