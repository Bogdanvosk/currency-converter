import React from 'react';
import styles from './converter.module.css'
import { Select, TextField } from '@react-md/form'
import { useDispatch, useSelector } from "react-redux";
import {
    calcDiff,
    setFirstCurrency,
    setFirstCurrencyValue,
    setSecondCurrency,
    swapCurrencies
} from '../../redux/actions/currencies'

const Converter = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    React.useEffect(() => {
        if (state.firstCurrencyValue >= 0) {
            state.currencies.find(currency => currency.CharCode === state.firstCurrency) && dispatch(calcDiff())
        } else {
            dispatch(setFirstCurrencyValue(0))
            dispatch(calcDiff())
        }
    }, [state.firstCurrencyValue, state.firstCurrency, state.secondCurrency])

    const currentFirstCurrency = state.currencies !== [] ? state.currencies.find(currency => currency.CharCode === state.firstCurrency) : null
    const currentSecondCurrency = state.currencies !== [] ? state.currencies.find(currency => currency.CharCode === state.secondCurrency) : null

    const handleFirstNameChange = e => {
        dispatch(setFirstCurrency(e))
    };

    const handleSecondNameChange = e => {
        dispatch(setSecondCurrency(e))
    };

    const onInputChange = e => {
        dispatch(setFirstCurrencyValue(e.target.value))
    }

    const onSwap = () => {
        dispatch(swapCurrencies())
        dispatch(calcDiff())
    }


    // Массив с кодами валют
    const options = []
    state.currencies.forEach(currency => {
        options.push(currency.CharCode)
    })

    return (
        <div className={styles.converter}>
            {state.currencies && <div className={styles.converterContainer}>
                <div className={styles.converterBlock}>
                    <span className={styles.converterName}>
                        {
                            currentFirstCurrency &&
                            currentFirstCurrency.Name
                        }
                    </span>
                    <div className={styles.converterWrapper}>

                        <Select id="firstCurrency" options={options} value={state.firstCurrency}
                                className={styles.converterSelect}
                                onChange={handleFirstNameChange} />
                        <TextField id="firstCurrencyValue"
                                   placeholder="Value"
                                   value={String(state.firstCurrencyValue)}
                                   type="number"
                                   onChange={onInputChange} />
                    </div>

                </div>
                <div className={styles.iconBlock}>
                    <svg
                        onClick={onSwap}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                        id="vector">
                        <path
                            id="path"
                            d="M 10 26 L 49.172 26 L 45.586 29.586 C 44.805 30.367 44.805 31.633 45.586 32.414 C 45.977 32.805 46.488 33 47 33 C 47.512 33 48.023 32.805 48.414 32.414 L 55.414 25.414 C 56.195 24.633 56.195 23.367 55.414 22.586 L 48.414 15.586 C 47.633 14.805 46.367 14.805 45.586 15.586 C 44.805 16.367 44.805 17.633 45.586 18.414 L 49.172 22 L 10 22 C 8.896 22 8 22.896 8 24 C 8 25.104 8.896 26 10 26 Z M 54 38 L 14.828 38 L 18.414 34.414 C 19.195 33.633 19.195 32.367 18.414 31.586 C 17.634 30.805 16.366 30.805 15.586 31.586 L 8.586 38.586 C 7.805 39.367 7.805 40.633 8.586 41.414 L 15.586 48.414 C 15.976 48.805 16.488 49 17 49 C 17.512 49 18.024 48.805 18.414 48.414 C 19.195 47.633 19.195 46.367 18.414 45.586 L 14.828 42 L 54 42 C 55.104 42 56 41.104 56 40 C 56 38.896 55.104 38 54 38 Z"
                            fill="#000000"
                            strokeWidth="1" />
                    </svg>
                </div>

                <div className={styles.converterBlock}>
                    <span className={styles.converterName}>
                        {
                            currentSecondCurrency &&
                            currentSecondCurrency.Name
                        }
                    </span>
                    <div className={styles.converterWrapper}>
                        <Select id="secondCurrency" options={options} value={state.secondCurrency}
                                className={styles.converterSelect}
                                onChange={handleSecondNameChange} />
                        <TextField id="secondCurrencyValue" placeholder="Value" type="number" disabled
                                   value={String(state.secondCurrencyValue !== null ? state.secondCurrencyValue : 0)}
                                   className={styles.converterResult} />
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default Converter;