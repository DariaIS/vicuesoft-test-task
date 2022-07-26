import React from "react";
import styles from "./index.module.scss";

import { beerType } from "@types";

type BeerProps = {
    beer: beerType;
};

export const BeerInfo: React.FC<BeerProps> = ({ beer }) => {
    const { name, id, description } = beer || {};

    return (
        <div className={styles.card}>
            <div className={styles.header}>{name}</div>
        </div>
    );
};
