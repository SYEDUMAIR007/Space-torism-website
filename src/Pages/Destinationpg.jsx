import React, { useContext } from 'react';
import MyContext from '../Context/UserContext';
import TabBar from '../components/TabBar';
const Destinationpg = () => {
  const { data, planet } = useContext(MyContext);

  if (!data || !data.destinations) {
    return <div>Loading...</div>;
  }

  const destinations = data.destinations;

  // Find the selected destination based on the planet
  const selectedDestination = destinations.find((destination) => destination.name === planet);
  
  return (
    <div className='background' id='destinationspg'>
    
      <h5>
        <span className='serialNo'>01</span>PICK YOUR DESTINATION
      </h5>
      <div className='content'>
      <img src={selectedDestination.images.png} alt="planet" className='planets'/>
     <div>
      <TabBar/>
      <h3>{selectedDestination.name}</h3>
      <p>{selectedDestination.description}</p>
      <hr/>
      <div id='sub-headings'>
      <span>
      <h6 className='subHeading2'>AVG. DISTANCE</h6>
      <h6 className='subHeading1'>{selectedDestination.distance}</h6>
      </span>
      <span>
      <h6 className='subHeading2'>EST. TRAVEL TIME</h6>
      <h6 className='subHeading1'>{selectedDestination.travel}</h6>
      </span></div>
      </div></div>
      </div>
    
  );
};

export default Destinationpg;