import React from 'react';
import BtcBackground from '../images/btc-background.jpg'

function Image() {
  return(
    <section>
      <img className="btc-image" src={ BtcBackground } alt="coin bitcoin" />
    </section>
  );
}

export default Image;
