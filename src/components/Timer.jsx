import React from 'react';
// import { useCountdownTimer } from 'use-countdown-timer';
import { useEffect, useState } from "react";

const TIME_IN_MILISECONDS_TO_COUNTDOWN = 30*1000;
const INTERVAL_IN_MILISECONDS = 1000;
function Timer() {
  const [time, setTime] = useState(TIME_IN_MILISECONDS_TO_COUNTDOWN);
  const [start, setStart] = useState(false);

    useEffect(() => {
        if(start){
            let interval;
            const countDownUntilZero = () => {
                setTime(prevTime => {
                    if (prevTime === 0) {
                        clearInterval(interval);
                        return  prevTime;
                    }
                    else {
                        return prevTime - INTERVAL_IN_MILISECONDS;
                    }
                })
            }
            interval = setInterval(countDownUntilZero, INTERVAL_IN_MILISECONDS);
            return () => clearInterval(interval);
            }
    }, [start]);
    
    return <>
        {time>0 ? (time/1000): (<><h2>{(time/1000)}</h2><h2>Finished Timer</h2></>)} <br />
        <button className='cursor-pointer' onClick={()=>setStart(true)}>Start</button>
        <button className='cursor-pointer' onClick={()=>setStart(false)}>Pause</button>
        <button className='cursor-pointer' onClick={()=>{setStart(false);setTime(TIME_IN_MILISECONDS_TO_COUNTDOWN)}}>Reset</button>
    </>;
}
export default Timer;