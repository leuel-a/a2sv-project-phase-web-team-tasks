import React, { useState, useEffect, useRef } from 'react';
import './styles.css';

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const buttonRef = useRef(null);

  // Update document title with counter value
  useEffect(() => {
    document.title = `Counter: ${count}`;
  }, [count]);

  // Function to increment the counter
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Function to decrement the counter
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
      <div className='container d-flex flex-column justify-content-center align-items-center mt-5'>
        <h2>Counter App</h2>
        <p className='lead'>Count: {count}</p>
        <div className='container d-flex justify-content-center gap-2'>
            <button className='btn btn-primary' ref={buttonRef} onClick={handleIncrement}>Increment</button>
            <button className='btn btn-danger' onClick={handleDecrement}>Decrement</button>
        </div>
      </div>
  );
};

export default App;
