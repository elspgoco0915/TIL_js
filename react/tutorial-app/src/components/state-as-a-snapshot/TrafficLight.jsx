import { useState } from 'react';

const TrafficLight = () => {
  const [walk, setWalk] = useState(true);
  console.log(walk);

  const handleClick = () => {
    const nextStatus = walk ? 'stop' : 'walk'
    alert(`${nextStatus} is next!`);
    setWalk(!walk);
  }

  return (
    <>
      <button onClick={handleClick}>
        Change to { walk ? 'stop' : 'walk' }
      </button>
      <h1 style={{
        color: walk ? 'darkgreen' : 'darkred'
      }}>
        { walk ? 'walk' : 'stop' }
      </h1>
    </>
  );
}

export default TrafficLight;