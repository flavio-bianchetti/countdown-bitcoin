import React from 'react';
import Header from '../component/Header';
import Countdown from '../component/Countdown';
import Statistics from '../component/Statistics';
import Footer from '../component/Footer';
import '../css/BackgroundBitcoin.css';

function CountdownBitcoin() {
  document.title="Countdown Bitcoin";
  return(
    <section className="bitcoin-background">
      <div className="counter-background"></div>
      <Header />
      <Countdown />
      <Statistics />
      <Footer />
    </section>
  );
}

export default CountdownBitcoin;
