import React, { useContext, useState } from 'react';
import MyContext from '../Context/UserContext';

const TabBar = () => {
  const { data, setPlanet } = useContext(MyContext);
  const destinations = data.destinations;
  const [activeTab, setActiveTab] = useState(null);

  const handleChange = (newPlanet) => {
    setPlanet(newPlanet);
    setActiveTab(newPlanet);
  };

  return (
    <div className='tabBar'>
      {destinations.map((planet) => (
        <a
          className={activeTab === planet.name ? 'active' : ''}
          key={planet.name}
          onClick={() => handleChange(planet.name)}
        >
          {planet.name}
        </a>
      ))}
    </div>
  );
};

export default TabBar;

