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
            <img className={styles.img} src={image_url} />
            <div className={styles.info}>
                <div className={styles.name}>{name}</div>
                <div className={styles.propertyDiv}> 
                    <span className={styles.propertyName}>Tagline - </span>
                    <span className={styles.property}>{tagline}</span>
                </div>
                <div className={styles.propertyDiv}>
                    <span className={styles.propertyName}>Abv - </span>
                    <span className={styles.property}>{abv}</span>
                </div>
                <div className={styles.propertyUl}>
                    <span className={styles.propertyName}>Food pairing</span>
                    <ul className={styles.ul}>
                        {food_pairing.map(element => (
                            <li className={styles.li} key={element}>{element}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.description}>{description}</div>
            </div>
        </div>
    );
};
