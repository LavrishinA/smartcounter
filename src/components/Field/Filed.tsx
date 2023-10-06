import React from "react";
import styles from "./Field.module.css"

type ChildrenPropsType = {
children: React.ReactNode
}

const Filed = ({children}: ChildrenPropsType) => {
    return (
        <div className={styles.container} >
            {children}
        </div>
    );
};

export default Filed;