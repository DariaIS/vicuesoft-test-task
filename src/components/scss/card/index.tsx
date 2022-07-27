import React from "react";
import Link from 'next/link'

import styles from "./index.module.scss";

import { beerType } from "@types";

type CardProps = {
    beer: beerType;
};

export const Card: React.FC<CardProps> = ({ beer }) => {
    const { name, image_url, description } = beer || {};

    return (
        <div className={styles.card}>
            <img className={styles.img} src={image_url} />
            <div className={styles.info}>
                <span className={styles.name}>{name}</span>
                <div className={styles.description + ' description'}>{description.substring(0, 140) + '...'}</div>
                <Link href={`/beers/${beer.id}`}>
                    <a>More</a>
                </Link>
            </div>
        </div>
    );
};