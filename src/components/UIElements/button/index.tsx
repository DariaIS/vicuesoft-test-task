import React, { ButtonHTMLAttributes } from "react";
import styles from "./index.module.scss";

type Props = {
    className?: string,
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = ({ children, className, ...rest }) => {
    return (
        <button type="button" className={(className ? className + ' ' : '')  + styles.button} { ...rest }>
            {children}
        </button>
    );
};
