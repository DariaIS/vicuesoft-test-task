import React, { InputHTMLAttributes } from 'react';

import styles from './index.module.scss';

type Props = {
    className?: string,
} & InputHTMLAttributes<HTMLInputElement>;

export const InputSearch: React.FC<Props> = ({ value, className, ...rest }) => {
    return <input type="search" placeholder="Search..." className={(className ? className + ' ' : '') + styles.input} value={value} {...rest} />;
};