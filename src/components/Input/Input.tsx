import styles from "./Input.module.css"
import React, {ChangeEvent} from "react";


type InputPropsType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    value: number
    onChangeInput: (value: number) => void
    onDisable: () => void
    isValid: boolean
}

const Input: React.FC<InputPropsType> = ({onChangeInput, onDisable, name, isValid, ...rest}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = +e.currentTarget.value
        onChangeInput(value)
    }
    const onFocusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        if (e.target.id === "Max value" || e.target.id === "Start value") {
            onDisable()
        }
    }
    return (
        <label className={styles.label} htmlFor={name}>
            <span>{`${name}:`}</span>
            <input
                className={`${styles.input} ${ isValid ? styles.error : "" }`}
                id={name}
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
                {...rest}/>
        </label>
    );
};

export default Input;