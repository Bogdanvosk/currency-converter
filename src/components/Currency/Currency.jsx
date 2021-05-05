import React from 'react';
import { Chip } from "@react-md/chip";
import styles from './currency.module.css'

const Currency = ({ onSetActive, currency, activeCurrency, onSetDiff }) => {
    const diffObj = {
        current: currency.Value,
        previous: currency.Previous
    }

    return (
        <Chip
            className={styles.currency}
            selected={activeCurrency === currency.CharCode}
            selectedThemed
            onClick={() => {
                onSetActive(currency.CharCode)
                onSetDiff(diffObj)
            }}>
            {currency.CharCode}
        </Chip>

    );
};

export default Currency;