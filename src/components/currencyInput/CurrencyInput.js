import React from "react";
// import PropTypes from "prop-types";

import "./currencyInput.scss";

const CurrencyInput = ({ amount, currency, currencies, onAmountChange, onCurrencyChange }) => {
    return (
        <div className="currencyInput">
            <input type="number" value={amount} onChange={(e) => onAmountChange(e.target.value)} />
            <select value={currency} onChange={(e) => onCurrencyChange(e.target.value)}>
                {currencies.map((currency) => (
                    <option value={currency}>{currency}</option>
                ))}
            </select>
        </div>
    );
};

// CurrencyInput.propTypes = {
//     amount: PropTypes.number.isRequired,
//     currency: PropTypes.string.isRequired,
//     currencies: PropTypes.array,
//     onAmountChange: PropTypes.func,
//     onCurrencyChange: PropTypes.func,
// };

export default CurrencyInput;
