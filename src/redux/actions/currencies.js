import Types from '../types'
import axios from "axios";

export const setCurrencies = payload => ({ type: Types.SET_CURRENCIES, payload })
export const setActiveCurrency = payload => ({ type: Types.SET_ACTIVE_CURRENCY, payload })

export const getCurrencies = () => dispatch => {
    axios.get('https://www.cbr-xml-daily.ru/daily_json.js').then(({ data }) => {
        dispatch(setCurrencies(Object.values(data.Valute)))
    })
}

export const filterCurrencies = () => ({ type: Types.FILTER_CURRENCIES })
export const updateCurrentFilterValue = payload => ({ type: Types.UPDATE_CURRENT_FILTER_VALUE, payload })
export const setDiff = payload => ({ type: Types.SET_DIFF, payload })

export const setFirstCurrency = payload => ({ type: Types.SET_FIRST_CURRENCY, payload })
export const setSecondCurrency = payload => ({ type: Types.SET_SECOND_CURRENCY, payload })
export const setFirstCurrencyValue = payload => ({ type: Types.SET_FIRST_CURRENCY_VALUE, payload })

export const calcDiff = () => ({ type: Types.CALC_DIFF })

export const swapCurrencies = () => ({ type: Types.SWAP_CURRENCIES })