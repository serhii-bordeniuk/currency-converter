import "./app.scss";
import AppHeader from "../appHeader/AppHeader";
import CurrencyInput from "../currencyInput/CurrencyInput";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [amount1, setAmount1] = useState(0);
    const [amount2, setAmount2] = useState(0);

    const [currency1, setCurrency1] = useState("USD");
    const [currency2, setCurrency2] = useState("UAH");

    const [rates, setRates] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get(
                "https://api.apilayer.com/fixer/latest?base=USD&apikey=zbo4WQ3kVxe61mCmh3obhhqGPt5DgW0M"
            )
            .then((response) => {
                setRates(response.data.rates);
                setLoading(false);
            });
    }, []);

    function fixedNumber(number) {
        return number?.toFixed(2);
    }

    function handleAmountOneChange(amount) {
        const result = fixedNumber((amount * rates[currency2]) / rates[currency1]);
        setAmount2(result);
        setAmount1(amount);
    }

    function handleCurrencyOneChange(currency) {
        const result = fixedNumber((amount1 * rates[currency2]) / rates[currency]);
        setAmount2(result);
        setCurrency1(currency);
    }

    function handleAmountTwoChange(amount) {
        const result = fixedNumber((amount * rates[currency1]) / rates[currency2]);
        setAmount1(result);
        setAmount2(amount);
    }

    function handleCurrencyTwoChange(currency) {
        const result = fixedNumber((amount2 * rates[currency1]) / rates[currency]);
        setAmount1(result);
        setCurrency2(currency);
    }

    const renderItems = () => {
        return (
            <div className="group">
                <CurrencyInput
                    currencies={Object.keys(rates)}
                    amount={amount1}
                    currency={currency1}
                    onAmountChange={handleAmountOneChange}
                    onCurrencyChange={handleCurrencyOneChange}
                />
                <CurrencyInput
                    currencies={Object.keys(rates)}
                    amount={amount2}
                    currency={currency2}
                    onAmountChange={handleAmountTwoChange}
                    onCurrencyChange={handleCurrencyTwoChange}
                    loading={loading}
                />
            </div>
        );
    };

    const items = loading ? <div className="group">Loading...</div> : renderItems();

    return (
        <div className="App">
            <AppHeader data={rates} fixedNumber={fixedNumber} loading={loading} />
            {items}
        </div>
    );
}

export default App;
