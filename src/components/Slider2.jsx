import React,{useContext} from 'react'
import MyContext from '../Context/UserContext'
const Slider2 = () => {
    const {data,setVehicle}=useContext(MyContext);
    const handleChange = (members) => {
        setVehicle(members)
      }
    const value=0;
  return (
    <div>
        {data.technology.map((vehicleName,index)=>{ return(
            <button key={vehicleName.name}
            className='sliderBtn2' onClick={() => handleChange(vehicleName.name)}>{index+1} </button>)
        })}
    </div>
  )
}

export default Slider2