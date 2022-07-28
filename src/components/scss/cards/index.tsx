import React, { useState, useEffect } from 'react';
import styles from "./index.module.scss";

import { Button, Card } from "@components/scss";
import { beerType } from "@types";

import { useCards } from './hooks';

type CardsProps = {
    beers: beerType[];
};

export const Cards: React.FC<CardsProps> = ({ beers }) => {
    const [page, setPage] = useState(1);
    const {
        slice,
        range
    } = useCards({ beers, page, cardsPerPage: 9 });

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        if (slice.length < 1 && page !== 1) {
            setPage(page - 1);
        }
    }, [slice, page, setPage]);

    return (
        <div>
            <div className={styles.cards}>
                {slice && slice.map(beer => (
                    <Card beer={beer} key={beer.id} />
                ))}
            </div>
            <div className={styles.buttons}>
                <Button onClick={() => {
                    setPage(page - 1);
                }} disabled={page <= 1}>
                    Previous
                </Button>
                <Button onClick={() => {
                    setPage(page + 1);
                }} disabled={range.length === page}>
                    Next
                </Button>
            </div>
        </div>
    );
};
