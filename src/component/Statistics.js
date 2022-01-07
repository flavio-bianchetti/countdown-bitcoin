import React, { useContext } from 'react';
import CountdownContext from '../context/CountdownContext';
import '../css/Statistics.css';

function Statistics() {
  const {
    valuesBTC,
    currencies,
  } = useContext(CountdownContext);
    
  const { previus, current } = valuesBTC;
  return (
    <div>
      {
        previus.usd > 0 && current.usd > 0
        && (
          <section className="statistics-section">
            <h1
              className="h1-statistics"
            >
              Statistics
            </h1>
            <table>
              <tr>
                <th>Currency</th>
                <th>Initial value</th>
                <th>Final value</th>
                <th>Variation</th>
                <th>Variation (%)</th>
              </tr>
              {
                currencies.map((currency, index) => (
                  <tr
                    key={ index }
                  >
                    <td>{ currency.description }</td>
                    <td>{ (previus[currency.value]).toLocaleString('en-US', {style: 'currency', currency: currency.value}) }</td>
                    <td>{ (current[currency.value]).toLocaleString('en-US', {style: 'currency', currency: currency.value}) }</td>
                    <td>{ ((current[currency.value] - previus[currency.value]).toLocaleString('en-US', {style: 'currency', currency: currency.value})) }</td>
                    <td>{ `${Number((((current[currency.value] - previus[currency.value]) * 100) / previus[currency.value]).toFixed(2)) || 0}` }
                    </td>
                  </tr>
                ))
              }
            </table>
          </section>
        )
      }
    </div>
  )
}

export default Statistics;
