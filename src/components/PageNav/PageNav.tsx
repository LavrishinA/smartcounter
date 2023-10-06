import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./PageNav.module.css"

const PageNav = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><NavLink className="cta" to="/">Counter1</NavLink></li>
                <li><NavLink className="cta" to="/counter2">Counter2</NavLink></li>
            </ul>
        </nav>
    );
};

export default PageNav;