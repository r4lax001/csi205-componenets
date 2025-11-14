import { useState } from 'react';
import './Counter.css';

function Counter(props) {
    const [value, setValue] = useState(props.value || 0);

    function increment() {
        setValue(value + 1);
    }

    function decrement() {
        setValue(value - 1);
    }

    return (
        <div className="counter-container">
            <h3 className="counter-title">{props.name || "COUNTER"}</h3>
            <div className="counter-controls">
                <button className="btn-minus" onClick={decrement}>−</button>
                <span className="counter-value">{value}</span>
                <button className="btn-plus" onClick={increment}>+</button>
            </div>
        </div>
    );
}

export default Counter;