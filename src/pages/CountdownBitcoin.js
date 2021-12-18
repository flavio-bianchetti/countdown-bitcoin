import React from 'react';
import Countdown from '../component/Countdown';
import Statistics from '../component/Statistics';
import '../css/BackgroundBitcoin.css';

function CountdownBitcoin() {
  document.title="Countdown Bitcoin";
  return(
    <section className="bitcoin-background">
      <div className="counter-background"></div>
      <Countdown />
      <Statistics />
    </section>
  );
}

export default CountdownBitcoin;
