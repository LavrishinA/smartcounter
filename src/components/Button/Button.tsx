import React from 'react';
import styles from "./Button.module.css"


type ButtonPropsType = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    name: string
}

const Button: React.FC<ButtonPropsType> = ({name, ...rest}) => {

    return (
        <button className={styles.btn} {...rest} >
            {name}
        </button>
    );
};

export default Button;