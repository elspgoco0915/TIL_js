import { useState } from 'react';

const RequestTracker = () => {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  const handleClick = async () => {
    setPending(p => p + 1);
    await delay(3000);
    setPending(p => p - 1);
    setCompleted(c => c + 1);
  }

  return (
    <>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy
      </button>
    </>
  );
}

const delay = (ms) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

export default RequestTracker;