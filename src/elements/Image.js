import React from 'react';
import BtcBackground from '../images/bitcoin-background.jpg';
import BtcImage from '../images/bitcoin-image.jpg';

function Image() {
  return(
    <section>
      <div className="div-background">
        <img className="btc-background" src={BtcBackground} alt="bitcoin coin" />
      </div>
      <img className="btc-image" src={BtcImage} alt="bitcoin coin" />
    </section>
  );
}

export default Image;
