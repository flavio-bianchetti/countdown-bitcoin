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
    <section className="statistics-section">
      {
        previus.usd > 0 && current.usd > 0
        && (
          <div>
            <h1>Statistics</h1>
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
          </div>
        )
      }
    </section>
  )
}

export default Statistics;
