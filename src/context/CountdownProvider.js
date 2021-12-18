import React, { useState } from 'react';
import CountdownContext from './CountdownContext';
import coinGeckoAPI from '../services/coinGeckoAPI';

function CountdownProvider({ children }) {
  const [timeSeconds, setTimeSeconds] = useState(0);
  const [valuesBTC, setValuesBTC] = useState({
    previus: {
      usd: 0,
      brl: 0,
      eur: 0,
      gbp: 0,
      cny: 0,
      aud: 0,
      cad: 0,
      chf: 0,
      jpy: 0,
      ars: 0,
      try: 0,
    },
    current: {
      usd: 0,
      brl: 0,
      eur: 0,
      gbp: 0,
      cny: 0,
      aud: 0,
      cad: 0,
      chf: 0,
      jpy: 0,
      ars: 0,
      try: 0,
    },
  });

  const [currencies] = useState([
    {
      value: 'usd',
      description: 'USD Dollar',
      symbol: '$',
    },
    {
      value: 'brl',
      description: 'Brazilian Real',
      symbol: 'R$',
    },
    {
      value: 'eur',
      description: 'Euro',
      symbol: '€',
    },
    {
      value: 'gbp',
      description: 'Pound Sterling',
      symbol: '£',
    },
    {
      value: 'cny',
      description: 'Yuan',
      symbol: '¥',
    },
    {
      value: 'aud',
      description: 'Australian Dollar',
      symbol: '$',
    },
    {
      value: 'cad',
      description: 'Canadian Dollar',
      symbol: '$',
    },
    {
      value: 'chf',
      description: 'Swiss Franc',
      symbol: '₣',
    },
    {
      value: 'jpy',
      description: 'Yen',
      symbol: '¥',
    },
    {
      value: 'ars',
      description: 'Argentine Peso',
      symbol: '$',
    },
    {
      value: 'try',
      description: 'Turkish Lira',
      symbol: '₤',
    },
  ]);

  function getPreviusValuesOfBitcoin() {
    coinGeckoAPI()
      .then(({ bitcoin }) => bitcoin ? setValuesBTC({
        ...valuesBTC,
        previus: bitcoin,
      }) : console.error(bitcoin));
  }

  function getCurrentValuesOfBitcoin() {
    coinGeckoAPI()
      .then(({ bitcoin }) => bitcoin ? setValuesBTC({
        ...valuesBTC,
        current: bitcoin,
      }) : console.error(bitcoin));
  }

  function setInitalValuesBTC() {
    setValuesBTC({
      previus: {
        usd: 0,
        brl: 0,
        eur: 0,
        gbp: 0,
        cny: 0,
        aud: 0,
        cad: 0,
        chf: 0,
        jpy: 0,
        ars: 0,
        try: 0,
      },
      current: {
        usd: 0,
        brl: 0,
        eur: 0,
        gbp: 0,
        cny: 0,
        aud: 0,
        cad: 0,
        chf: 0,
        jpy: 0,
        ars: 0,
        try: 0,
      },
    });
  }

  const context = {
    timeSeconds,
    setTimeSeconds,
    currencies,
    valuesBTC,
    setValuesBTC,
    getPreviusValuesOfBitcoin,
    getCurrentValuesOfBitcoin,
    setInitalValuesBTC,
  };

  return (
    <CountdownContext.Provider value={ context }>
      { children }
    </CountdownContext.Provider>
  );
}

export default CountdownProvider;
