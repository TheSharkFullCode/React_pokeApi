import React, { useState } from 'react'

const Gitmore = () => {

  const [count,setCount] = useState(0);
  
  const Dofecth = async ()=>{

        // const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=20&limit=50`);
        // const data = await res.json()
        // console.log(data);

        // setCount(res
        // return data;

    }

    // setCount(data)
    
  return (

    <div>
        
        <button onClick={Dofecth}> Gimme more..  </button>
        
        
    </div>

  )

}

export default Gitmore