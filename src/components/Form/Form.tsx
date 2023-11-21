import React, {FormEvent} from 'react';
import Input from "../Input/Input";
import Filed from "../Field/Filed";
import Button from "../Button/Button";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setMax, setStart} from "../../store/reducer";


type FormPropsType = {
    max: number
    start: number
    disableBtn: boolean
    onDisable: () => void
    onSubmit: () => void
}

const Form: React.FC<FormPropsType> = ({onSubmit, disableBtn, start, max, ...rest}) => {
    const dispatch = useDispatch()

    const navigate = useNavigate()
    const {pathname} = useLocation()

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(pathname === "/counter2/settings") navigate("/counter2")
        onSubmit()
    }

    const startValueHandler = (value: number) => dispatch(setStart(value))
    const maxValueHandler = (value: number) => dispatch(setMax(value))

    const isValidMax = max <= 0 || max <= start
    const isValidStart = start < 0 || start >= max


    return (
        <form onSubmit={submitHandler} className={`content`}>

            <Filed>
                <Input name="Max value"
                       value={max}
                       type="number"
                       isValid={isValidMax}
                       onChangeInput={maxValueHandler}
                       {...rest}/>
                <Input name="Start value"
                       value={start}
                       type="number"
                       isValid={isValidStart}
                       onChangeInput={startValueHandler}
                       {...rest}/>
            </Filed>
            <Filed>
                <Button name="set" disabled={!disableBtn || isValidMax || isValidStart}/>
            </Filed>
        </form>
    );
};

export default Form;