import React, { useContext, useState } from 'react';
import '../css/Countdown.css';
import Input from '../elements/Input'
import Button from '../elements/Button';
import CountdownContext from '../context/CountdownContext';

function Countdown() {
  const { timeSeconds, setTimeSeconds } = useContext(CountdownContext);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  function setCountdownUserTimer(event) {
    const { name, value } = event.target;
    setCountdown({
      ...countdown,
      [name]: Number(value),
    });
  }

  function convertInSeconds() {
    const sec = countdown.seconds
    + countdown.minutes * 60
    + countdown.hours * 3600
    + countdown.days * 86400;

    setTimeSeconds(sec);

    const seconds = sec % 60;
    const minutes = Math.trunc(sec / 60) % 60;
    const hours = Math.trunc(sec / 3600) % 24;
    const days = Math.trunc(sec / 86400);

    setCountdown({
      days,
      hours,
      minutes,
      seconds,
    });
  }

  return (
    <section className="countdown-section">
      <div className="div-timer-inputs">
        <div>
          <Input
            className="input-timer"
            type="number"
            name="days"
            value={ countdown.days }
            onChange={ setCountdownUserTimer }
            label="Days"
            size="5"
            min="0"
            max="99999"
          />
        </div>
        <div>
          <Input
            className="input-timer"
            type="number"
            name="hours"
            value={ countdown.hours }
            onChange={ setCountdownUserTimer }
            label="Hours"
            size="5"
            min="0"
            max="99999"
          />
        </div>
        <div>
        <Input
            className="input-timer"
            type="number"
            name="minutes"
            value={ countdown.minutes }
            onChange={ setCountdownUserTimer }
            label="Minutes"
            size="5"
            min="0"
            max="99999"
          />
        </div>
        <div>
        <Input
            className="input-timer"
            type="number"
            name="seconds"
            value={ countdown.seconds }
            onChange={ setCountdownUserTimer }
            label="Seconds"
            size="5"
            min="0"
            max="99999"
          />
        </div>
      </div>
      <div className="div-timer-buttons">
        <Button
          className="start-timer"
          name="startTimer"
          onClick={ convertInSeconds }
          label="Start"
        />
        <Button
          className="stop-timer"
          name="stopTimer"
          onClick={ () => true }
          label="Stop"
        />
        <Button
          className="reset-timer"
          name="resetTimer"
          onClick={ () => true }
          label="Reset"
        />
      </div>
      <h1
        className="countdown-timer"
      >
        { timeSeconds }
      </h1>
    </section>
  );
}

export default Countdown;
