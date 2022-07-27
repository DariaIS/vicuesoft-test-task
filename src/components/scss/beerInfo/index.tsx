import React from "react";
import styles from "./index.module.scss";

import { beerType } from "@types";

type BeerProps = {
    beer: beerType;
};

export const BeerInfo: React.FC<BeerProps> = ({ beer }) => {
    const { name, image_url, description, tagline, abv, food_pairing } = beer || {};

    return (
        <div className={styles.card}>
            BeerInfo
            <div className={styles.header}>{name}</div>
            <img className={styles.img} src={image_url} />
            <div className={styles.description}>{description}</div>
        </div>
    );
};
