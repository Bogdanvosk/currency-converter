import { Route } from 'react-router-dom'
import CurrenciesList from "./pages/CurrenciesList/CurrenciesList";
import Converter from "./pages/Converter/Converter";
import { Header } from "./components/";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { getCurrencies } from "./redux/actions/currencies";

function App() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    React.useEffect(() => {
        dispatch(getCurrencies())
    }, [])

    // Если поле фильтра непустое и валюта активна, то возвращается отфильтрованный массив и выбранная валюта,
    // иначе возвращается весь массив
    const currencies = state.currentFilterValue !== '' && state.activeCurrency !== null
        ? [...state.filteredCurrencies, state.currencies.find(currency => currency.CharCode === state.activeCurrency)]
        : state.currencies


    return (
        <div className="App">
            <Header />
            <Route path='/list'
                   render={() => <CurrenciesList currencies={currencies} activeCurrency={state.activeCurrency} />} />
            <Route path='/converter' component={Converter} />
        </div>
    );
}

export default App;