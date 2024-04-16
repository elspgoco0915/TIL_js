import { useState } from "react";

const NestedForm = () => {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  const handleNameChange = (e) => {
    setPerson({
      ...person,
      name: e.target.value
    })
  }
  // TODO: 240401 途中まで

  const handleTitleChange = (e) => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    })
  }
  const handleCityChange = (e) => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    })
  }
  const handleImageChange = (e) => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    })
  }


  return (
    <>
    <h2>NestedForm</h2>
    <label>
      Name: <input value={person.name} onChange={handleNameChange}/>
    </label>
    <label>
      Name: <input value={person.artwork.title} onChange={handleNameChange}/>
    </label>
    <label>
      Name: <input value={person.artwork.image} onChange={handleNameChange}/>
    </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img 
        src={person.artwork.image} 
        alt={person.artwork.title}
      />
    </>
  );
}

export default NestedForm;