import { useState } from "react";
import "./Temperatures.css";

function Temperatures() {
    const [celsius, setCelsius] = useState(25);
    const [fahrenheit, setFahrenheit] = useState((25 * 9) / 5 + 32);
    const [kelvin, setKelvin] = useState(25 + 273.15);

    const handleCelsiusChange = (val) => {
        const c = parseFloat(val);
        setCelsius(c);
        setFahrenheit((c * 9) / 5 + 32);
        setKelvin(c + 273.15);
    };

    const handleFahrenheitChange = (val) => {
        const f = parseFloat(val);
        setFahrenheit(f);
        setCelsius(((f - 32) * 5) / 9);
        setKelvin(((f - 32) * 5) / 9 + 273.15);
    };

    const handleKelvinChange = (val) => {
        const k = parseFloat(val);
        setKelvin(k);
        setCelsius(k - 273.15);
        setFahrenheit(((k - 273.15) * 9) / 5 + 32);
    };

    return (
        <div className="temperatures-container">
            <h3 className="temperature-title">TEMPERATURES</h3>
            <div className="temperatures-variables">
                {/* Celsius */}
                <div className="temperature-box">
                    <div className="temp-badge">{celsius.toFixed(2)}℃</div>
                    <p className="temp-label">CELSIUS</p>
                    <div className="temp-controls">
                        <button className="btn-minus" onClick={() => handleCelsiusChange(celsius - 1)}>−</button>
                        <span className="temp-value">{celsius.toFixed(2)}</span>
                        <button className="btn-plus" onClick={() => handleCelsiusChange(celsius + 1)}>+</button>
                    </div>
                </div>

                {/* Fahrenheit */}
                <div className="temperature-box">
                    <div className="temp-badge">{fahrenheit.toFixed(2)}℉</div>
                    <p className="temp-label">FAHRENHEIT</p>
                    <div className="temp-controls">
                        <button className="btn-minus" onClick={() => handleFahrenheitChange(fahrenheit - 1)}>−</button>
                        <span className="temp-value">{fahrenheit.toFixed(2)}</span>
                        <button className="btn-plus" onClick={() => handleFahrenheitChange(fahrenheit + 1)}>+</button>
                    </div>
                </div>

                {/* Kelvin */}
                <div className="temperature-box">
                    <div className="temp-badge">{kelvin.toFixed(2)}°K</div>
                    <p className="temp-label">KELVIN</p>
                    <div className="temp-controls">
                        <button className="btn-minus" onClick={() => handleKelvinChange(kelvin - 1)}>−</button>
                        <span className="temp-value">{kelvin.toFixed(2)}</span>
                        <button className="btn-plus" onClick={() => handleKelvinChange(kelvin + 1)}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Temperatures;