// import node module libraries
import React, { Fragment, useEffect, useState } from "react";

// import required hooks
import { useMounted } from "hooks/useMounted";

const CountdownTimer = ({ endDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining);
  const hasMounted = useMounted();

  function calculateTimeRemaining() {
    const currentTime = new Date().getTime();
    const endTime = new Date(endDate).getTime();
    const timeDiff = endTime - currentTime;

    if (timeDiff <= 0) {
      clearInterval(intervalId);
      return { expired: true };
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, expired: false };
  }

  function updateCountdown() {
    setTimeRemaining(calculateTimeRemaining);
  }

  useEffect(() => {
    const intervalId = setInterval(updateCountdown, 1000);
    return () => clearInterval(intervalId);
  });

  const { days, hours, minutes, seconds, expired } = timeRemaining;

  return (
    <div className="deals-countdown w-100">
      {expired ? (
        <span>Countdown expired</span>
      ) : (
        hasMounted && (
          <Fragment>
            <span className="countdown-section text-center">
              <span className="countdown-amount hover-up">{days}</span>
              <span className="countdown-period"> days </span>
            </span>
            <span className="countdown-section text-center">
              <span className="countdown-amount hover-up">{hours}</span>
              <span className="countdown-period"> hours </span>
            </span>
            <span className="countdown-section text-center">
              <span className="countdown-amount hover-up">{minutes}</span>
              <span className="countdown-period"> mins </span>
            </span>
            <span className="countdown-section text-center">
              <span className="countdown-amount hover-up">{seconds}</span>
              <span className="countdown-period"> sec </span>
            </span>
          </Fragment>
        )
      )}
    </div>
  );
};

export default CountdownTimer;
