import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Issues = () => {

    const [data,setData]=useState();

    useEffect(() => {
     
    axios.get('https://api.github.com/repos/pallets/click/issues?state=all&per_page=1').then(
        res=>{
            const dat=res.data;
            console.log(dat);
        }
    )
      
    }, [])
    

  return (

    <div>
        Issues
    </div>
  )
}

export default Issues