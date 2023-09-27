import React, { useState, useEffect } from 'react';
import './Timer.css';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [pausedSeconds, setPausedSeconds] = useState(0);

  useEffect(() => {
    let timer;
    if (isRunning && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0 || isPaused) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning, seconds, isPaused]);

  const startTimer = () => {
    setIsRunning(true);
    setIsPaused(false);
  };

  const stopTimer = () => {
    setIsRunning(false);
    setIsPaused(false);
  };

  const pauseTimer = () => {
    setIsRunning(false);
    setIsPaused(true);
    setPausedSeconds(seconds);
  };

  const resumeTimer = () => {
    setIsRunning(true);
    setIsPaused(false);
    setSeconds(pausedSeconds);
  };

  const resetTimer = () => {
    setSeconds(0);
    setIsRunning(false);
    setIsPaused(false);
  };

  const adjustTimer = (seconds) => {
    setSeconds(seconds);
    setIsRunning(false);
    setIsPaused(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const secs = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // Calculate the progress percentage
  const progress = ((1 - seconds / 60) * 100).toFixed(2);

  return (
    <div className="timer-container">
      <div className="timer-display">{formatTime(seconds)}</div>
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{
            background: `conic-gradient(#3498db ${progress}%, transparent 0%)`,
          }}
        ></div>
      </div>
      <div className="timer-controls">
      {isRunning ? (
          <button className="timer-button" onClick={pauseTimer}>Pause</button>
        ) : (
          <button className="timer-button" onClick={startTimer}>Start</button>
        )}
        <button className="timer-button" onClick={stopTimer}>Stop</button>
        <button className="timer-button" onClick={resetTimer}>Reset</button>
        <input
          type="number"
          placeholder="Set Timer (seconds)"
          onChange={(e) => adjustTimer(parseInt(e.target.value))}
        />
      </div>
  {isPaused && (
        <div className="paused-text">
          Timer paused at {formatTime(pausedSeconds)}.
          <button onClick={resumeTimer}>Resume</button>
        </div>
      )}
    </div>
  );
}

export default Timer;
