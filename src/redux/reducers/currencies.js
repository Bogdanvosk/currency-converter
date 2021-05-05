import Types from '../types'

const initialState = {
    currencies: [],
    filteredCurrencies: [],
    activeCurrency: null,
    currentFilterValue: '',
    diff: null,
    firstCurrency: 'AUD',
    secondCurrency: 'EUR',
    firstCurrencyValue: 1,
    secondCurrencyValue: null

}

const currenciesReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SET_CURRENCIES:
            return { ...state, currencies: action.payload }

        case Types.SET_ACTIVE_CURRENCY:
            return { ...state, activeCurrency: action.payload }

        case Types.FILTER_CURRENCIES:
            return {
                ...state,
                filteredCurrencies: state.currencies
                    .filter(currency => currency.CharCode.toLowerCase()
                            .includes(state.currentFilterValue.toLowerCase())
                        || currency.Name.toLowerCase().includes(state.currentFilterValue.toLowerCase()))
            }

        case Types.UPDATE_CURRENT_FILTER_VALUE:
            return { ...state, currentFilterValue: action.payload }

        case Types.SET_DIFF:
            return { ...state, diff: action.payload.current / action.payload.previous }

        case Types.SET_FIRST_CURRENCY:
            return { ...state, firstCurrency: action.payload }

        case Types.SET_SECOND_CURRENCY:
            return { ...state, secondCurrency: action.payload }
        case Types.SET_FIRST_CURRENCY_VALUE:
            return {
                ...state,
                firstCurrencyValue: action.payload,
            }

        case Types.CALC_DIFF:
            const firstCurrInRub = state.currencies.find(currency => {
                return currency.CharCode === state.firstCurrency
            }).Value * state.firstCurrencyValue;
            const secondCurrInRub = state.currencies.find(currency => currency.CharCode === state.secondCurrency).Value

            return { ...state, secondCurrencyValue: (firstCurrInRub / secondCurrInRub).toFixed(2) }
        case Types.SWAP_CURRENCIES:
            return { ...state, firstCurrency: state.secondCurrency, secondCurrency: state.firstCurrency }
        default:
            return { ...state }
    }
}

export default currenciesReducer