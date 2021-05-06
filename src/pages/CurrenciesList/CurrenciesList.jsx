import React from 'react';
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types'
import { filterCurrencies, setActiveCurrency, setDiff, updateCurrentFilterValue } from "../../redux/actions/currencies";
import { TextField } from '@react-md/form'

import styles from './currencies.module.css'
import Currency from "../../components/Currency/Currency";
import { CurrencyBlock } from "../../components";

const CurrenciesList = ({ currencies, activeCurrency }) => {
    const dispatch = useDispatch()

    const setActive = char => {
        dispatch(setActiveCurrency(char))
    }

    const setDiffCurrency = (obj) => {
        dispatch(setDiff(obj))
    }

    const onInputChange = e => {
        dispatch(updateCurrentFilterValue(e.target.value))
        dispatch(filterCurrencies())
    }

    return (
        <div className={styles.currencies}>
            <TextField id="currencyFilter" placeholder="Type currency" type="url"
                       onChange={onInputChange}
                       className={styles.currenciesInput} />
            <ul>
                {currencies && currencies.map(currency => (
                    <Currency
                        key={currency.ID}
                        activeCurrency={activeCurrency}
                        onSetActive={setActive}
                        currency={currency}
                        onSetDiff={setDiffCurrency}
                    />
                ))}
            </ul>
            <CurrencyBlock currencies={currencies} />
        </div>
    )
}

export default CurrenciesList

CurrenciesList.propTypes = {
    currencies: PropTypes.arrayOf(PropTypes.object),
    activeCurrency: PropTypes.string
}

CurrenciesList.defaultProps = {
    currencies: [],
    activeCurrency: ''
}