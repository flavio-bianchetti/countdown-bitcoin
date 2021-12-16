import React, { useContext, useState } from 'react';
import '../css/Countdown.css';
import Input from '../elements/Input'
import Button from '../elements/Button';
import ArcSVG from '../elements/ArcSVG';
import CountdownContext from '../context/CountdownContext';
import DataInput from '../data/DataInput';

function Countdown() {
  const { timeSeconds, setTimeSeconds } = useContext(CountdownContext);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [clockIsVisible, setClockIsVisible] = useState(false);

  function setCountdownUserTimer(event) {
    const { name, value } = event.target;
    setCountdown({
      ...countdown,
      [name]: Number(value),
    });
  }

  function setTimerCountdown() {
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
    setClockIsVisible(true);
  }

  // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
  function mapNumber(number, in_min, in_max, out_min, out_max) {
    return (
        ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
  }
  return (
    <section className="countdown-section">
      <div className="div-timer-inputs">
        {
          DataInput.map((input, index) => (
            <div
              key={ index }
            >
              <Input
                className={ input.className }
                type={ input.type }
                name={ input.name }
                value={ countdown }
                onChange={ setCountdownUserTimer }
                label={ input.label }
                size={ input.size }
                min={ input.min }
                max={ input.max }
              />
            </div>
          ))
        }
      </div>
      <div className="div-timer-buttons">
        <Button
          className="set-timer"
          name="setTimer"
          onClick={ setTimerCountdown }
          label="Set Timer"
        />
        <Button
          className="start-timer"
          name="startTimer"
          onClick={ () => true }
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
      {
        clockIsVisible && (
          <div className="countdown-timer">
            <div className="countdown-days">
              <ArcSVG radius={ mapNumber(countdown.days, 30, 0, 0, 360) } /> 
              { countdown.days }
              <span>days</span>
            </div>
            <div className="countdown-hours">
              <ArcSVG radius={ mapNumber(countdown.hours, 24, 0, 0, 360) } />
              { countdown.hours }
              <span>hours</span>
            </div>
            <div className="countdown-minutes">
              <ArcSVG radius={ mapNumber(countdown.minutes, 60, 0, 0, 360) } />
              { countdown.minutes }
              <span>minutes</span>
            </div>
            <div className="countdown-seconds">
              <ArcSVG radius={ mapNumber(countdown.seconds, 60, 0, 0, 360) } />
              { countdown.seconds }
              <span>seconds</span>
            </div>
          </div>
        )
      }
    </section>
  );
}

export default Countdown;
