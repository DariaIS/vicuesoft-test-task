import React, { InputHTMLAttributes, HTMLInputTypeAttribute } from "react";

import { InputSearch } from './inputSearch';

import styles from "./index.module.scss";

type Props = {
    type: HTMLInputTypeAttribute,
    className?: string,
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<Props> = ({ type, className, ...rest }) => {
    switch (type) {
        case 'search':
            return <InputSearch className={(className ? className + ' ' : '')  + styles.input} {...rest} />;
        default:
            return <input className={(className ? className + ' ' : '')  + styles.input} {...rest} />;
    }
};
