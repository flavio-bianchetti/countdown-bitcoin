import React from 'react';
import Countdown from '../component/Countdown';
import '../css/BackgroundBitcoin.css';

function CountdownBitcoin() {
  document.title="Countdown Bitcoin";
  return(
    <section className="bitcoin-background">
      <div className="counter-background"></div>
        <Countdown />
    </section>
  );
}

export default CountdownBitcoin;
