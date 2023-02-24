import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";

import "./appHeader.scss";

export const AppHeader = ({ data, fixedNumber, loading }) => {
    const [usd, setUsd] = useState("");
    const [eur, setEur] = useState("");

    let firstCurrency = fixedNumber(data.UAH);
    let secondCurrency = fixedNumber(data.UAH / data.EUR);

    useEffect(() => {
        setUsd(firstCurrency);
        setEur(secondCurrency);
    }, [firstCurrency, secondCurrency]);

    function isLoad(content) {
        return loading ? <span>...</span> : content;
    }

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand> Current exchange rate: </Navbar.Brand>
                    <Navbar.Brand>
                        UAH/USD <span>{isLoad(usd)}</span>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        UAH/EUR <span>{isLoad(eur)}</span>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
};

export default AppHeader;
