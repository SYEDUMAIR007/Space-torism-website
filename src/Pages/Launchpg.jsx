import React,{useContext} from 'react'
import MyContext from '../Context/UserContext'
import Slider2 from '../components/Slider2'

function Launchpg() {
  const {data,vehicle}=useContext(MyContext);
  if (!data || !data.technology) {
    return <div>Loading...</div>;
  }
  const vehicles=data.technology;
  const selectedVehicle=vehicles.find((vehicles)=>vehicles.name===vehicle);
  return (
    <div className='background' id='launchpg'>
        <h5>
        <span className='serialNo'>03</span>SPACE LAUNCH 101
      </h5>
      <div className='content'>
        <img src={selectedVehicle.images.portrait} alt="vehicle" className='vehicles' />
        
       <div className='launch-content'>
       <Slider2/>
       <div>
        <small className='subHeading2'>THE TERMINOLOGY...</small>
        <h4>{selectedVehicle.name}</h4>
        <p>{selectedVehicle.description}</p></div></div>
        </div></div>
        
  )
}

export default Launchpg