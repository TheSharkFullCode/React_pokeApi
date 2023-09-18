// import { useState } from 'react'

import './App.css'
import { Practice } from './Practice'
import { Cafealtura } from './componentes/Cafealtura';
import CardPicahu from './componentes/CardPicachu';
import Gitmore from './componentes/Gitmore';
import PokeList from './componentes/PokeList'
import { useState } from 'react';


function App() {

  const [count, setCount] = useState(0);

  const handleClick = ()=>{
    setCount(count +1)
  }


  return (

    <div className="print">
      <Gitmore></Gitmore>
      <PokeList id={3} />
      <Practice count={count} handleClick={handleClick} id={count} pokeid={1} id2={4}>    </Practice>



      <CardPicahu></CardPicahu>

      <Cafealtura ></Cafealtura>
    </div>
  )
}


export default App


//cuando itere sobre mi componente pokecard, cada propiedad debe tener una unica key, eso  fue debido al map.  
//luego cuando vas y lo punes dentrop de los parentesis y dentro llaves, eso ahi se llamada, lo que recibe,  
