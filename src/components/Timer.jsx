import React from 'react';
import { useCountdownTimer } from 'use-countdown-timer';

function Timer() {
    const INITIAL_TIME = 1000 * 60 * 5;
    const { countdown, start, pause, reset, isRunning } = useCountdownTimer({
        timer: INITIAL_TIME, // 60 seconds (in milliseconds)
        autostart: true,
        onExpire: () => {
            console.log("Timer Finished");
        },
    });


    return (
        <div>
        <h2>Time remaining: {Math.ceil(countdown / (1000*60))}m</h2>
        <h2>Time remaining: {Math.ceil(countdown / 1000)}s</h2>
        <button onClick={start} disabled={isRunning}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Timer;