import React, { useState, useEffect } from 'react';
import styles from "./index.module.scss";

import { Card } from "@components/sections";
import { Button, Input } from "@components/UIElements";
import { beerType } from "@types";

import { useCards } from './hooks';

type CardsProps = {
    beers: beerType[];
};

export const Cards: React.FC<CardsProps> = ({ beers }) => {
    const [page, setPage] = useState(1);
    const {
        slice,
        range,
        handleChangeInput
    } = useCards({ beers, page, cardsPerPage: 9 });

    useEffect(() => {
        if (slice.length < 1 && page !== 1) {
            setPage(page - 1);
        }
    }, [slice, page, setPage]);

    return (
        <>
            <Input type='search' className={styles.input} onChange={handleChangeInput} />
            {slice.length !== 0 ?
                <>
                    <div className={styles.cards}>
                        {slice.map(beer => (<Card beer={beer} key={beer.id} />))}
                    </div>
                    <div className={styles.buttons}>
                        <Button
                            className={styles.button}
                            onClick={() => {
                                setPage(page - 1);
                                window.setTimeout("window.scroll({top: 0,left: 0,behavior: 'smooth'})", 100)
                            }} disabled={page <= 1}>
                            Previous
                        </Button>
                        <Button
                            className={styles.button}
                            onClick={() => {
                                setPage(page + 1);
                                window.setTimeout("window.scroll({top: 0,left: 0,behavior: 'smooth'})", 100)
                            }} disabled={range.length <= page}>
                            Next
                        </Button>
                    </div>
                </>
                : <div className={styles.error}>No items found</div>}
        </>
    );
};
