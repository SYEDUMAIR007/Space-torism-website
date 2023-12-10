import React, { useState,useEffect } from 'react';
import MyContext from './UserContext';
function MyProvider({ children }) {
    const [data,setData]=useState(null);
    const [planet,setPlanet]=useState('Moon');
    const [menuOpen, setMenuOpen] = useState(false);
    const [bgImg,setBgImg]=useState('Home')
    const [members,setMembers]=useState('Douglas Hurley')
    const [vehicle,setVehicle]=useState("Launch vehicle")

    useEffect(()=>{
     
      async function fetchData(){
        try{
          const url='./src/data.json';
          const res=await fetch(url);
          if(!res.ok){
            throw new Error('Network response was not okay')
          }
          const json=await res.json();
          setData(json);
        }
        catch(err){
          console.error('Error',err)
        }
      }
      fetchData();
     
    },[])


  return (
    <MyContext.Provider value={{ data, setData,planet,setPlanet,menuOpen, setMenuOpen,members,setMembers,vehicle,setVehicle,bgImg,setBgImg}}>
      {children}
    </MyContext.Provider>
  );
}

export default MyProvider;