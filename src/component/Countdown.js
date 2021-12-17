import React, { useContext, useState, useEffect } from 'react';
import '../css/Countdown.css';
import Input from '../elements/Input'
import Button from '../elements/Button';
import ArcSVG from '../elements/ArcSVG';
import CountdownContext from '../context/CountdownContext';
import DataInput from '../data/DataInput';

function Countdown() {
  const { timeSeconds, setTimeSeconds } = useContext(CountdownContext);
  const [initialCountdown, setInitialCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [clockIsVisible, setClockIsVisible] = useState(false);
  const [startCountdown, setStartCountdown] = useState(false);

  function setCountdownUserTimer(event) {
    const { name, value } = event.target;
    const newValue = Number(value) > 99999 ? 99999 : Number(value);
    setInitialCountdown({
      ...countdown,
      [name]: newValue,
    });
  }

  useEffect(() => {
    const sec = timeSeconds;
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
  }, [timeSeconds]);

  useEffect(() => {
    let timer = null;
    if (startCountdown && timeSeconds > 0) {
      timer = setInterval(() => {
        setTimeSeconds((timeSeconds) => timeSeconds - 1);
        if (timeSeconds === 1) {
          setStartCountdown(false);
          setClockIsVisible(false);
        }
      }, 1000);
    } else 
      if (!startCountdown && timeSeconds !== 0) {
        clearInterval(timer);
      }
    return () => clearInterval(timer);    
  }, [startCountdown, setTimeSeconds, timeSeconds]);

  function setTimerCountdown() {
    const sec = initialCountdown.seconds
    + initialCountdown.minutes * 60
    + initialCountdown.hours * 3600
    + initialCountdown.days * 86400;
    setTimeSeconds(sec);
    setClockIsVisible(true);
  }

  // Cálculo aplicado à renderização do círculo SVG
  // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
  function mapNumber(number, in_min, in_max, out_min, out_max) {
    return ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  }

  function startCount() {
    setStartCountdown(true);
  }

  function stopCount() {
    setStartCountdown(false);
  }

  function resetCount() {
    setClockIsVisible(false);
    setStartCountdown(false);
    setInitialCountdown({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
    setCountdown({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
    setTimeSeconds(0);
  }

  function renderInputs() {
    return (
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
                value={ initialCountdown }
                onChange={ setCountdownUserTimer }
                label={ input.label }
                size={ input.size }
                min={ input.min }
                max={ input.max }
                disabled={ clockIsVisible }
              />
            </div>
          ))
        }
      </div>
    );
  }

  function renderButtons() {
    return (
      <div className="div-timer-buttons">
        <Button
          className={ !clockIsVisible ? 'timer-button' : 'disabled-timer-button' }
          name="setTimer"
          onClick={ setTimerCountdown }
          label="Set Timer"
          disabled={ clockIsVisible }
        />
        <Button
          className={ clockIsVisible && !startCountdown ? 'timer-button' : 'disabled-timer-button' }
          name="startTimer"
          onClick={ startCount }
          label="Start"
          disabled={ !clockIsVisible && startCountdown }
        />
        <Button
          className={ clockIsVisible && startCountdown ? 'timer-button' : 'disabled-timer-button' }
          name="stopTimer"
          onClick={ stopCount }
          label="Stop"
          disabled={ !clockIsVisible && !startCountdown }
        />
        <Button
          className={ clockIsVisible ? 'timer-button' : 'disabled-timer-button' }
          name="resetTimer"
          onClick={ resetCount }
          label="Reset"
          disabled={ !clockIsVisible }
        />
      </div>
    );
  }

  function renderClock() {
    return (
      <div className="countdown-clock">
        {
          clockIsVisible && (
            <div className="countdown-timer">
              <div className="countdown-days">
                <ArcSVG
                  radius={
                    countdown.days > 30
                    ? mapNumber(29.9, 30, 0, 0, 360)
                    : mapNumber(countdown.days, 30, 0, 0, 360)
                  }
                /> 
                { countdown.days > 999 ? 999 : countdown.days }
                <span>days</span>
              </div>
              <div className="countdown-hours">
                <ArcSVG
                  radius={
                    countdown.hours > 24
                    ? mapNumber(23.9, 24, 0, 0, 360)
                    : mapNumber(countdown.hours, 24, 0, 0, 360)
                  }
                />
                { countdown.hours > 999 ? 999 : countdown.hours }
                <span>hours</span>
              </div>
              <div className="countdown-minutes">
                <ArcSVG
                  radius={
                    countdown.minutes > 60
                    ? mapNumber(59.9, 60, 0, 0, 360)
                    : mapNumber(countdown.minutes, 60, 0, 0, 360)
                  }
                />
                { countdown.minutes > 999 ? 999 : countdown.minutes }
                <span>minutes</span>
              </div>
              <div className="countdown-seconds">
                <ArcSVG
                  radius={
                    countdown.seconds > 60
                    ? mapNumber(59.9, 60, 0, 0, 360)
                    : mapNumber(countdown.seconds, 60, 0, 0, 360)
                  }
                />
                { countdown.seconds > 999 ? 999 : countdown.seconds }
                <span>seconds</span>
              </div>
            </div>
          )
        }
      </div>
    );
  }

  return (
    <section className="countdown-section">
      { renderInputs() }
      { renderButtons() }
      { renderClock() }
    </section>
  );
}

export default Countdown;
