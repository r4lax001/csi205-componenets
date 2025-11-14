import React, { useState, useEffect, useRef } from 'react';

function Calculator() {
  
  const [screen, setScreen] = useState('0');
  const [operator, setOperator] = useState('?');
  const [currentState, setCurrentState] = useState('S0');
  const [previous, setPrevious] = useState(0);

  const lastOperandRef = useRef(0);

  
  function numberClicked(number) {
    if (currentState === 'S0') {
      setScreen(number.toString());
      setCurrentState('S1');
    } else if (currentState === 'S1') {
      if (screen.length < 9) {
        setScreen(screen + number.toString());
      }
    } else if (currentState === 'S2') {
      setScreen(number.toString());
      setCurrentState('S1');
    }
  }

  function operatorClicked(op) {
    if (currentState === 'S1') {
      setPrevious(parseFloat(screen));
      setOperator(op);
      setCurrentState('S2');
    } else if (currentState === 'S2') {
      setOperator(op);
    }
  }

  function equalClicked() {
    if (operator !== '?') {
      let current = parseFloat(screen);
      let result = 0;

      if (currentState === 'S1') {
        lastOperandRef.current = current;
      }

      if (operator === '+') {
        result = previous + lastOperandRef.current;
      } else if (operator === '-') {
        result = previous - lastOperandRef.current;
      }

      result = parseFloat(result.toPrecision(9)).toString();

      setScreen(result);
      setCurrentState('S0');
      setPrevious(parseFloat(result));
    }
  }

  function ceClicked() {
    setScreen('0');
    setPrevious(0);
    setOperator('?');
    setCurrentState('S0');
  }

  useEffect(() => {
    function checkKeyboard(event) {
      if (event.key >= '0' && event.key <= '9') {
        numberClicked(Number(event.key));
      } else if (event.key === '+') {
        operatorClicked('+');
      } else if (event.key === '-') {
        operatorClicked('-');
      } else if (event.key === '=' || event.key === 'Enter') {
        event.preventDefault();
        equalClicked();
      } else if (event.key === 'Escape') {
        ceClicked();
      }
    }

    document.addEventListener('keydown', checkKeyboard);

    return () => {
      document.removeEventListener('keydown', checkKeyboard);
    };
  }, [screen, previous, operator, currentState]); 

  const btnBase = "w-14 h-14 m-1.5 rounded-xl text-2xl font-semibold focus:outline-none transition-all duration-200 shadow-md";
  const btnNumber = `${btnBase} bg-zinc-600 text-zinc-100 border border-zinc-500 hover:bg-zinc-500 hover:scale-105 hover:shadow-lg active:scale-95`;
  const btnOperator = `${btnBase} bg-zinc-700 text-zinc-200 border border-zinc-600 hover:bg-zinc-600 hover:scale-105 hover:shadow-lg active:scale-95`;
  const btnClear = `${btnBase} bg-zinc-800 text-zinc-100 border border-zinc-700 hover:bg-zinc-700 hover:scale-105 hover:shadow-lg active:scale-95`;
  const btnEquals = `${btnBase} bg-zinc-500 text-white border border-zinc-400 hover:bg-zinc-400 hover:scale-105 hover:shadow-lg active:scale-95`;
  const btnDisabled = "disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:shadow-none";

  return (
    <div className="font-inter mt-10 mb-20">
      
      <div className="border-2 border-zinc-700 mx-auto w-fit p-6 rounded-3xl bg-zinc-800 shadow-2xl relative overflow-hidden">
        
        {/* Decorative elements */}
        <div className='absolute -top-16 -right-16 w-48 h-48 bg-zinc-600/20 rounded-full blur-3xl'></div>
        <div className='absolute -bottom-16 -left-16 w-48 h-48 bg-zinc-500/20 rounded-full blur-3xl'></div>
        
        {/* Top accent line */}
        <div className='absolute top-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-zinc-500 to-transparent'></div>
        
        <div className="relative z-10">
          {/* Title */}
          <div className="text-center mb-3">
            <h2 className="text-lg font-bold text-zinc-300">
              CALCULATOR
            </h2>
          </div>
          
          {/* Screen */}
          <div className="bg-zinc-900 border-2 border-zinc-700 rounded-2xl text-right px-4 py-5 mb-5 text-4xl overflow-hidden overflow-ellipsis text-zinc-300 shadow-inner relative">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/10 to-zinc-600/10"></div>
            <div className="relative font-mono tracking-wider">{screen}</div>
          </div>
          
          {/* Memory buttons */}
          <div className="flex justify-center mb-2">
            <button className={`${btnOperator} ${btnDisabled} w-12 h-10 text-sm`} disabled>MC</button>
            <button className={`${btnOperator} ${btnDisabled} w-12 h-10 text-sm`} disabled>MR</button>
            <button className={`${btnOperator} ${btnDisabled} w-12 h-10 text-sm`} disabled>M+</button>
            <button className={`${btnOperator} ${btnDisabled} w-12 h-10 text-sm`} disabled>M-</button>
            <button className={`${btnClear} w-12 h-10 text-sm`} onClick={ceClicked}>CE</button>
          </div>
          
          {/* Row 1 */}
          <div className="flex justify-center">
            <button className={btnNumber} onClick={() => numberClicked(7)}>7</button>
            <button className={btnNumber} onClick={() => numberClicked(8)}>8</button>
            <button className={btnNumber} onClick={() => numberClicked(9)}>9</button>
            <button className={`${btnOperator} ${btnDisabled}`} disabled>&divide;</button>
            <button className={`${btnOperator} ${btnDisabled}`} disabled>√</button>
          </div>
          
          {/* Row 2 */}
          <div className="flex justify-center">
            <button className={btnNumber} onClick={() => numberClicked(4)}>4</button>
            <button className={btnNumber} onClick={() => numberClicked(5)}>5</button>
            <button className={btnNumber} onClick={() => numberClicked(6)}>6</button>
            <button className={`${btnOperator} ${btnDisabled}`} disabled>&times;</button>
            <button className={`${btnOperator} ${btnDisabled}`} disabled>%</button>
          </div>
          
          {/* Row 3 */}
          <div className="flex justify-center">
            <button className={btnNumber} onClick={() => numberClicked(1)}>1</button>
            <button className={btnNumber} onClick={() => numberClicked(2)}>2</button>
            <button className={btnNumber} onClick={() => numberClicked(3)}>3</button>
            <button 
              id="minus" 
              className={`${btnOperator} ${operator === '-' ? 'ring-2 ring-zinc-400 bg-zinc-600 shadow-xl' : ''}`} 
              onClick={() => operatorClicked('-')}
            >
              &minus;
            </button>
            <button className={`${btnOperator} ${btnDisabled}`} disabled>1/x</button>
          </div>
          
          {/* Row 4 */}
          <div className="flex justify-center">
            <button className={btnNumber} onClick={() => numberClicked(0)}>0</button>
            <button className={`${btnNumber} ${btnDisabled}`} disabled>.</button>
            <button className={`${btnNumber} ${btnDisabled}`} disabled>+/-</button>
            <button 
              id="plus" 
              className={`${btnOperator} ${operator === '+' ? 'ring-2 ring-zinc-400 bg-zinc-600 shadow-xl' : ''}`}
              onClick={() => operatorClicked('+')}
            >
              +
            </button>
            <button className={btnEquals} onClick={equalClicked}>=</button>
          </div>
        </div>
        
        {/* Bottom accent line */}
        <div className='absolute bottom-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-zinc-500 to-transparent'></div>
      </div>

    </div>
  );
}

export default Calculator;