import React, { useState } from 'react';
import CountdownContext from './CountdownContext';

function CountdownProvider({ children }) {
  const [timeSeconds, setTimeSeconds] = useState(0);

  const context = {
    timeSeconds,
    setTimeSeconds,
  };

  return (
    <CountdownContext.Provider value={ context }>
      { children }
    </CountdownContext.Provider>
  );
}

export default CountdownProvider;
