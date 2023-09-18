import React, { useEffect, useState } from "react";
// import image1 from "./src/assets/img/sharkFavorite.jpg"

const CardPicahu = ()=>{

    const [pokemons,setPokemons]= useState({});


    const getpokemon = async ()=>{

        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/1`);
        const data = await resp.json();
        setPokemons(data)
        console.log(data);

    }

    

    useEffect(()=>{
        getpokemon();

    },[])

    return(

        <>
        
            <div>

                {/* <img src={pokemons.sprites?.front_default}/> */}
                <img src={pokemons.sprites?.front_default} alt="" />
                <span>{pokemons.name}</span>
            </div>
        
        <button onClick={getpokemon}> getpokemon 

        </button>

            <div>
                {/* <img src={image1} alt="" /> */}
            </div>
        
        </>
    )
}
export default CardPicahu
