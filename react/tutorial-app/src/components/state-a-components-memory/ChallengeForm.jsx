// import { useState } from 'react';
const ChallengeForm = () => {
  const handleClick = () => {
    const name = prompt('What is your name?');
    alert(`Hello, ${name}!`);
  }

  return (
    <button onClick={handleClick}>
      greeting
    </button>
  );
}
export default ChallengeForm;