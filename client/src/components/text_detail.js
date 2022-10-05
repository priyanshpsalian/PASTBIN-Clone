import React,{useState,useEffect} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import Text_found from './text_found';

export default function Text_detail() {
    const id = useParams().id;
    useEffect(() => {
      find();
    }, []);
    const [found,setFound]=useState([])
    const find=async ()=>{
      
      console.log("ll");
      try{
        let result = await fetch(`http://localhost:5000/${id}`);
          result = await result.json();
          console.log(result);
          setFound(result)

      }
      catch(e){
        console.log(e);
      }
      
    }
    // find();
    
  return (
    <>

      <Text_found name={found}/>
      
    </>
  );
}
