import React from "react";

import styles from "./index.module.scss";
import data from "@public/meta.json";
import { BeerInfo } from "@components/scss";

export const Beers: React.FC = () => {
    return (
        <div className={styles.cards}>
            {(data?.plugins ?? []).map((plugin) => (
                <div key={`key-${plugin.name}`} className={styles.cardWrapper}>
                </div>
            ))}
        </div>
    );
};
