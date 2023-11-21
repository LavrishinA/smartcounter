import './App.css';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import Counter from "./components/Counter/Counter";
import React from "react";
import Form from "./components/Form/Form";
import PageNav from "./components/PageNav/PageNav";
import Button from "./components/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {CounterType, disable, increment, reset} from "./store/reducer";
import {Store} from "./store/store";


function App() {
    const {
        counterValue,
        max,
        start,
        isDisable
    } = useSelector<Store, CounterType>(state => state.counter)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     const maxLocalStorageValue = localStorage.getItem("max")
    //     const startLocalStorageValue = localStorage.getItem("start")
    //     if (!maxLocalStorageValue || !startLocalStorageValue) return
    //     setMax(+maxLocalStorageValue)
    //     setStart(+startLocalStorageValue)
    //
    // }, []);

    const incrementCounterHandler = () => {
        dispatch(increment())
    }

    const resetCounterHandler = () => {
      dispatch(reset())
    }

    const submitSetHandler = () => {
        dispatch(disable(false))
        // localStorage.setItem("start", JSON.stringify(start))
        // localStorage.setItem("max", JSON.stringify(max))
    }

    const disableCounterBtnHandler = () => {
        dispatch(disable(true))
    }

    return (
        <div>
            <BrowserRouter>
                <PageNav/>
                <Routes>

                    <Route index element={<>
                        <Counter
                            max={max}
                            start={start}
                            counterValue={counterValue}
                            disableBtn={isDisable}
                            onIncrement={incrementCounterHandler}
                            onReset={resetCounterHandler}/>
                        <Form max={max}
                              start={start}
                              disableBtn={isDisable}
                              onSubmit={submitSetHandler}
                              onDisable={disableCounterBtnHandler}/>

                    </>}/>

                    <Route path="/counter2">
                        <Route index element={<Counter max={max}
                                                       start={start}
                                                       counterValue={counterValue}
                                                       disableBtn={isDisable}
                                                       onIncrement={incrementCounterHandler}
                                                       onReset={resetCounterHandler}>
                            <NavLink to="settings"><Button name="Settings"/></NavLink>
                        </Counter>}/>


                        <Route path={"settings"} element={<Form max={max}
                                                                start={start}
                                                                disableBtn={isDisable}
                                                                onSubmit={submitSetHandler}
                                                                onDisable={disableCounterBtnHandler}/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
