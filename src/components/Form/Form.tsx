import React, {FormEvent} from 'react';
import Input from "../Input/Input";
import Filed from "../Field/Filed";
import Button from "../Button/Button";
import {useNavigate, useLocation} from "react-router-dom";


type FormPropsType = {
    max: number
    start: number
    disableBtn: boolean
    onSetMax: (n: number) => void
    onSetStart: (n: number) => void
    onSubmit: () => void
    onDisable: () => void
}

const Form: React.FC<FormPropsType> = ({onSubmit, disableBtn, onSetStart, onSetMax, start, max, ...rest}) => {
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(pathname === "/counter2/settings") navigate("/counter2")
        onSubmit()
    }
    const isValidMax = max <= 0 || max <= start
    const isValidStart = start < 0 || start >= max

    return (
        <form onSubmit={submitHandler} className={`content`}>

            <Filed>
                <Input name="Max value"
                       value={max}
                       type="number"
                       onChangeInput={onSetMax}
                       isValid={isValidMax}
                       {...rest}/>
                <Input name="Start value"
                       value={start}
                       type="number"
                       onChangeInput={onSetStart}
                       isValid={isValidStart}
                       {...rest}/>
            </Filed>
            <Filed>
                <Button name="set" disabled={!disableBtn || isValidMax || isValidStart}/>
            </Filed>
        </form>
    );
};

export default Form;