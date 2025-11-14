import { useEffect, useState } from "react";
import './Add.css';

function Add({ aValue, bValue }) {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    useEffect(() => {
        setA(aValue || 0);
        setB(bValue || 0);
    }, [aValue, bValue]);

    return (
        <div className="add-container">
            <h3 className="add-title">ADD</h3>
            <h2 className="add-display">
                <span className="badge badge-gray">A = {a}</span>
                <span className="badge badge-blue">A + B = {a + b}</span>
                <span className="badge badge-gray">B = {b}</span>
            </h2>
            <div className="add-variables">
                <div className="variable-container">
                    <p className="var-label">A</p>
                    <div className="var-controls">
                        <button className="btn-minus" onClick={() => setA(a - 1)}>−</button>
                        <span className="var-value">{a}</span>
                        <button className="btn-plus" onClick={() => setA(a + 1)}>+</button>
                    </div>
                </div>
                <div className="variable-container">
                    <p className="var-label">B</p>
                    <div className="var-controls">
                        <button className="btn-minus" onClick={() => setB(b - 1)}>−</button>
                        <span className="var-value">{b}</span>
                        <button className="btn-plus" onClick={() => setB(b + 1)}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Add;