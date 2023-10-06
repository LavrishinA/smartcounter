import './App.css';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";

import Counter from "./components/Counter/Counter";
import React, {useEffect, useState} from "react";
import Form from "./components/Form/Form";
import PageNav from "./components/PageNav/PageNav";
import Button from "./components/Button/Button";


function App() {
    const [counterValue, setCounterValue] = useState<number>(0)

    const [max, setMax] = useState<number>(5)
    const [start, setStart] = useState<number>(0)
    const [disableBtn, setDisableBtn] = useState(false)

    useEffect(() => {
        const maxLocalStorageValue = localStorage.getItem("max")
        const startLocalStorageValue = localStorage.getItem("start")
        if (!maxLocalStorageValue || !startLocalStorageValue) return
        setMax(+maxLocalStorageValue)
        setStart(+startLocalStorageValue)

    }, []);

    const incrementCounterHandler = () => {
        setCounterValue(n => n + 1)
    }

    const resetCounterHandler = () => {
        setCounterValue(start)
    }

    const submitSetHandler = () => {
        setCounterValue(start)
        setDisableBtn(false)
        localStorage.setItem("start", JSON.stringify(start))
        localStorage.setItem("max", JSON.stringify(max))
    }

    const disableCounterBtnHandler = () => {
        setDisableBtn(true)
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
                            disableBtn={disableBtn}
                            onIncrement={incrementCounterHandler}
                            onReset={resetCounterHandler}/>
                        <Form max={max}
                              start={start}
                              disableBtn={disableBtn}
                              onSetMax={setMax}
                              onSetStart={setStart}
                              onSubmit={submitSetHandler}
                              onDisable={disableCounterBtnHandler}/>

                    </>}/>

                    <Route path="/counter2">
                        <Route index element={<Counter max={max}
                                                       start={start}
                                                       counterValue={counterValue}
                                                       disableBtn={disableBtn}
                                                       onIncrement={incrementCounterHandler}
                                                       onReset={resetCounterHandler}>
                            <NavLink to="settings"><Button name="Settings"/></NavLink>
                        </Counter>}/>


                        <Route path={"settings"} element={<Form max={max}
                                                                start={start}
                                                                disableBtn={disableBtn}
                                                                onSetMax={setMax}
                                                                onSetStart={setStart}
                                                                onSubmit={submitSetHandler}
                                                                onDisable={disableCounterBtnHandler}/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
