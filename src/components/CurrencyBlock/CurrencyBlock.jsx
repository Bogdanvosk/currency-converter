import React from 'react';
import { useSelector } from "react-redux";
import styles from './currencyBlock.module.css'
import switchIcon from '../../assets/switch.svg'
import classNames from "classnames";
import PropTypes from "prop-types";
import CurrenciesList from "../../pages/CurrenciesList/CurrenciesList";

const CurrencyBlock = ({ currencies }) => {
    const state = useSelector(state => state)
    const currentCurrency = currencies.find(currency => currency.CharCode === state.activeCurrency)

    return (
        <div>
            {state.activeCurrency && <div className={styles.currencyBlock}>
                <span className={styles.currencyName}>{state.activeCurrency && currentCurrency.Name}</span>

                <div className={styles.currencyContainer}>
                    <div className={styles.currencyValue}>
                        {'1 ' + currentCurrency.CharCode}
                        <img src={switchIcon} alt="Switch" />
                        <span>{currentCurrency.Value} RUB</span>

                    </div>
                    <div className={styles.diff}>
                        <svg
                            style={{ transform: `rotate(${state.diff > 1 ? "-90deg" : "90deg"})` }}
                            className={classNames({
                                more: state.diff > 1,
                                less: state.diff < 1
                            })}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            id="vector">
                            <path
                                id="path"
                                d="M 508.875 248.458 L 348.875 88.458 C 344.708 84.291 337.958 84.291 333.792 88.458 C 329.625 92.625 329.625 99.375 333.792 103.541 L 475.584 245.333 L 10.667 245.333 C 4.771 245.333 0 250.104 0 256 C 0 261.896 4.771 266.667 10.667 266.667 L 475.584 266.667 L 333.792 408.458 C 329.625 412.625 329.625 419.375 333.792 423.541 C 335.875 425.624 338.605 426.666 341.334 426.666 C 344.063 426.666 346.792 425.624 348.876 423.541 L 508.876 263.541 C 513.042 259.375 513.042 252.625 508.875 248.458 Z"
                                fill={state.diff > 1 ? "#11ff00" : "#ff0000"}
                                strokeWidth="1" />
                        </svg>

                        <span>{state.diff && state.diff.toFixed(4)}</span>

                    </div>
                </div>

                <div className={styles.currencyValue}>
                    <span>1 RUB</span>
                    <img src={switchIcon} alt="Switch" />
                    <span>{(1 / currentCurrency.Value).toFixed(4)} {currentCurrency.CharCode}</span>

                </div>

            </div>}
        </div>
    );
};

export default CurrencyBlock;

CurrencyBlock.propTypes = {
    currencies: PropTypes.arrayOf(PropTypes.object)
}

CurrencyBlock.defaultProps = {
    currencies: []
}