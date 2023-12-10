import React, { useContext } from 'react';
import Slider from '../components/Slider';
import MyContext from '../Context/UserContext';
const Crewpg = () => {
  const { data, members } = useContext(MyContext);
  
 
  if (!data || !data.crew) {
    return <div>Loading...</div>;
  }
  const crewMembers = data.crew;

  
  const selectedCrewMember = crewMembers.find((member) => member.name === members);
  
  return (
    <div className='background' id='crewpg'>
    <h5>
      <span className='serialNo'>02</span>MEET YOUR CREW
    </h5>
    <div  className='content'>
    <img src={selectedCrewMember.images.png} alt="CREW" className='crew'/>
    <hr />
    <div className='crew-content'>
    <Slider/>
    <div id='crew-subcontent'>
    <small className='subHeading3'>{selectedCrewMember.role}</small>
    <h4>{selectedCrewMember.name}</h4> 
    <p>{selectedCrewMember.bio}</p>  </div>
    </div>
    </div>
    </div>
  )
}

export default Crewpg