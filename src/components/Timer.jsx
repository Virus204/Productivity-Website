import React from 'react';
import { useCountdownTimer } from 'use-countdown-timer';

function Timer() {
  const INITIAL_TIME = 1000 * 60 * 2; 

  const {
    countdown,
    start,
    pause,
    reset,
    isRunning,
  } = useCountdownTimer({
    timer: INITIAL_TIME,
    autostart: false,
    onExpire: () => {
      console.log('Timer finished!');
    },
  });

  // Helper function to format milliseconds to MM:SS
  const formatTime = () => {
    const totalSeconds = Math.max(0, Math.ceil(countdown / 1000));
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div>
        <div>
            <span className="text-lg font-medium text-white/90">Focus Timer</span>
        </div>
        <div>{formatTime()}</div>
        <p style={{ color: isRunning ? 'green' : 'gray' }}>
            Status: {isRunning ? 'Running' : 'Paused / Stopped'}
        </p>
        <div>
            <button onClick={start} disabled={isRunning}>Start</button>
            <button onClick={pause} disabled={!isRunning}>Pause</button>
            <button onClick={reset}>Reset</button>
        </div>
    </div>
  );
}
export default Timer;