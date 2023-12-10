import React, { useContext} from 'react'
import MyContext from '../Context/UserContext';
const Slider = () => {
  const { data, setMembers } = useContext(MyContext);
  const crew = data.crew;
  const handleChange = (members) => {
    setMembers(members)
  }

return (
  <div className='slider'>
    {crew.map((member) => {
      return (
        <button key={member.name}  className='sliderBtn' onClick={() => handleChange(member.name)} ></button>
      )

    })}
  </div>
)
}

export default Slider