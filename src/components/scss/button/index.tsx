import React, { ButtonHTMLAttributes } from "react";
import styles from "./index.module.scss";

export type IButton = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<IButton> = ({ children, ...rest }) => {
    return (
        <button type="button" className={styles.button} {...rest}>
            {children}
        </button>
    );
};
