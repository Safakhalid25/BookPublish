// CountdownTimer.jsx
import React, { useState, useEffect } from 'react';
import colon from "../../Assets/images/colon.png";
import comments_profile from "../../Assets/images/comments_profile.png";
import line_timer  from "../../Assets/images/line_timer.png";

const CountdownTimer = () => {
 
  const targetDate = new Date('2024-12-30T00:00:00');

  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(getTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  function getTimeRemaining(targetDate) {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds };
  }

  return (
    <div id="countdownApp">
      <h2 className="day_before_drop">Days Before Dropped</h2>
      <div id="timer">
        <div>
          <span className="day_hr_mint_seconds_numbers">{timeRemaining.days}</span>
          <span className="day_hr_mint_seconds_text"> Days </span>
        </div>
        <div>
          <span className="day_hr_mint_seconds_numbers">
            <img src={colon} alt="Colon" />
          </span>
          <span className="day_hr_mint_seconds_numbers">
            <img src={line_timer} alt="Line Timer" />
          </span>
        </div>
        <div>
          <span className="day_hr_mint_seconds_numbers">{timeRemaining.hours}</span>
          <span className="day_hr_mint_seconds_text"> Hours </span>
        </div>
        <div>
          <span className="day_hr_mint_seconds_numbers">
            <img src={colon} alt="Colon" />
          </span>
          <span className="day_hr_mint_seconds_numbers">
            <img src={line_timer} alt="Line Timer" />
          </span>
        </div>
        <div>
          <span className="day_hr_mint_seconds_numbers">{timeRemaining.minutes}</span>
          <span className="day_hr_mint_seconds_text"> Minutes </span>
        </div>
        <div>
          <span className="day_hr_mint_seconds_numbers">
            <img src={colon} alt="Colon" />
          </span>
          <span className="day_hr_mint_seconds_numbers">
            <img src={line_timer} alt="Line Timer" />
          </span>
        </div>
        <div>
          <span className="day_hr_mint_seconds_numbers">{timeRemaining.seconds}</span>
          <span className="day_hr_mint_seconds_text"> Seconds </span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
