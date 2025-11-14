import React, { useState, useEffect, useRef } from 'react';

import imgBasketball from '../assets/img/Animation-image/basketball_PNG102482.png';
import imgFootball from '../assets/img/Animation-image/football.png';
import imgVolleyball from '../assets/img/Animation-image/voleyball.png';
import imgHuman from '../assets/img/Animation-image/Human.png';
import imgCartoon from '../assets/img/Animation-image/images.jpg';
import imgWoodBg from '../assets/img/Animation-image/wood-bg.jpg';

const fieldWidth = 750;
const fieldHeight = 400;
const ballDiameter = 100;
const vx = 5;
const vy = 5;

const maxX = fieldWidth - ballDiameter - 2;
const maxY = fieldHeight - ballDiameter - 2;

const ballOptions = [
  'none', 'basketball', 'football', 'volleyball', 'human', 'cartoon'
];



const ballImages = {
  'basketball': `url(${imgBasketball})`,
  'football': `url(${imgFootball})`,
  'volleyball': `url(${imgVolleyball})`,
  'human': `url(${imgHuman})`,
  'cartoon': `url(${imgCartoon})`,
};

function Animation() {
  
  const [running, setRunning] = useState(false);
  const [selectedBall, setSelectedBall] = useState('none');
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const xRef = useRef(0);
  const yRef = useRef(0);
  const goRightRef = useRef(true);
  const goDownRef = useRef(true);
  const runningRef = useRef(running);

  useEffect(() => {
    runningRef.current = running;
  }, [running]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      
      if (!runningRef.current) {
        return;
      }

      if (goRightRef.current) {
        xRef.current += vx;
        if (xRef.current >= maxX) goRightRef.current = false;
      } else {
        xRef.current -= vx;
        if (xRef.current <= 0) goRightRef.current = true;
      }

      if (goDownRef.current) {
        yRef.current += vy;
        if (yRef.current >= maxY) goDownRef.current = false;
      } else {
        yRef.current -= vy;
        if (yRef.current <= 0) goDownRef.current = true;
      }

      setPosition({ x: xRef.current, y: yRef.current });

    }, 25);

    return () => clearInterval(intervalId);
  }, []);


  const handleStartClick = () => {
    setRunning(prev => !prev);
  };

  const handleBallSelect = (ballName) => {
    setSelectedBall(ballName);
  };

  const getBallStyle = () => {
    const style = {
      width: `${ballDiameter}px`,
      height: `${ballDiameter}px`,
      left: `${position.x}px`,
      top: `${position.y}px`,
      backgroundImage: 'none',
      backgroundColor: '#6c757d',
    };

    if (ballImages[selectedBall]) {
      style.backgroundImage = ballImages[selectedBall];
      style.backgroundColor = 'transparent';
    }
    return style;
  };

  const getStartButtonClass = () => {
    const base = "font-semibold py-2 px-4 rounded-lg flex items-center transition-colors duration-200";
    return running
      ? `${base} bg-red-500 hover:bg-red-600 text-white`
      : `${base} bg-green-500 hover:bg-green-600 text-white`;
  };

  const getBallButtonClass = (ballName) => {
    const base = "font-semibold py-2 px-4 rounded-lg transition-colors duration-200 capitalize";
    const isActive = selectedBall === ballName;

    if (ballName === 'none') {
      return isActive
        ? `${base} bg-gray-600 text-white`
        : `${base} bg-white text-zinc-500 border border-zinc-500 hover:bg-gray-100`;
    }
    
    return isActive
      ? `${base} bg-zinc-400 text-white`
      : `${base} bg-zinc-800 text-zinc-200 border border-zinc-400 hover:bg-zinc-600 hover:text-white`;
  };

  return (
    <div className="mx-auto w-fit border mt-15 mb-13 border-zinc-500 rounded-lg p-4 shadow-lg bg-gradient-to-br from-zinc-800 to-zinc-700">
      
      <div
        className="border-2 border-zinc-500 rounded-lg bg-[url('/img/wood-bg.jpg')] bg-cover bg-center overflow-hidden"
        style={{ width: `${fieldWidth}px`, height: `${fieldHeight}px` }}
      >
        <div
          className="rounded-full border border-zinc-500 bg-cover bg-center relative"
          style={getBallStyle()}
        ></div>
      </div>

      <div className="flex justify-between items-center mt-4">
        
        <button className={getStartButtonClass()} onClick={handleStartClick}>
          {running ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-6.75-13.5v13.5" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
            </svg>
          )}
          {running ? 'PAUSE' : 'START'}
        </button>

        <div className="flex flex-wrap gap-2">
          {ballOptions.map(ballName => (
            <button
              key={ballName}
              className={getBallButtonClass(ballName)}
              onClick={() => handleBallSelect(ballName)}
            >
              {ballName}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Animation;