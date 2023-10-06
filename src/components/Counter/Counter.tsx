import Filed from "../Field/Filed";
import {CountFiled} from "../CountFiled/CountFiled";
import Button from "../Button/Button";
import React from "react";

type CounterPropsType = {
    max: number
    start: number
    counterValue: number
    onIncrement: () => void
    onReset: () => void
    disableBtn: boolean
    children?: React.ReactNode
}
const Counter: React.FC<CounterPropsType> = (props) => {
    const {max, start, counterValue, onIncrement, onReset, disableBtn, children} = props
    return (
        <div className="content">
            <Filed>
                <CountFiled counterValue={counterValue} max={max} start={start} disableBtn={disableBtn}/>
            </Filed>
            <Filed>
                <Button name={"Increment"} onClick={onIncrement} disabled={counterValue >= max ? true : disableBtn}/>
                <Button name={"Reset"} onClick={onReset} disabled={counterValue === start ? true : disableBtn}/>
                {children}
            </Filed>
        </div>
    )

};

export default Counter;