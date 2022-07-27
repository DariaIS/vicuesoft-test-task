import React, { useEffect } from "react";
import styles from "./index.module.scss";

import { Card } from "@components/scss";
import { beerType } from "@types";

type CardsProps = {
    beers: [beerType];
};

export const Cards: React.FC<CardsProps> = ({ beers }) => {

    return (
        <div className={styles.cards}>
            {beers && beers.map(beer => (
                <Card beer={beer} key={beer.id} />
            ))}
        </div>
    );
};
