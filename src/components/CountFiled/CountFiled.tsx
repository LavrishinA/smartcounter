import React from 'react';
import styles from "./CountFiled.module.css";

type CounterFiledProps = {
    counterValue: number
    disableBtn: boolean
    max: number
    start: number

}
export const CountFiled: React.FC<CounterFiledProps> = ({counterValue, max, start, disableBtn}) => {
    let message = "Press set"
    if (start < 0 || max <= start) message = "Invalid value"

    return (
        <>
            {
                disableBtn ? <span className={styles.value}>{message}</span> :
                    <div className={`${styles.value} ${counterValue >= max && styles.maxValue}`}>
                        {counterValue}
                    </div>
            }
        </>
    )
};

