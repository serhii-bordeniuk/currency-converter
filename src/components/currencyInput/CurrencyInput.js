import React from "react";

import "./currencyInput.scss";

const CurrencyInput = ({ amount, currency, currencies, onAmountChange, onCurrencyChange }) => {
    return (
        <div className="currencyInput">
            <input type="number" value={amount} onChange={onAmountChange} />
            <select value={currency} onChange={onCurrencyChange}>
                {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CurrencyInput;
