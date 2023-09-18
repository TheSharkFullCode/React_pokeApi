import React, { useEffect, useState } from 'react'

export const Cafealtura = ({}) => {

    const [coffe, setCoffes] =useState([])

    const [isloading,setIsloading ]=useState(false)
        console.log(coffe);
    
//    if(isloading)
// cuando haga la peticion, es true y este cargando. 
//luego la paso a false.
        useEffect(() => {
            fetch('https://cafe-de-altura.vercel.app/api/products')
            .then(resp => resp.json())
            .then((data)=>{setCoffes(data)});
            
            
            
        }, []);
        
        
        
  

        return (

            <div className='productos'>

                {coffe.products?.map((Urls)=>{
                    console.log(Urls);
            
                return(

                <div>
                <span> cargando...</span>

                <img src={Urls.img_url} key={coffe.brand} alt="" />

                </div>
                )    

                })}

                
              
            </div>
          );


    };

