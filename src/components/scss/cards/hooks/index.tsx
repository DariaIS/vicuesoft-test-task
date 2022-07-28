import { useState, useEffect } from 'react';

import { beerType } from "@types";

type Props = {
    beers: beerType[];
    page: number;
    cardsPerPage: number;
};

export const useCards = (props: Props) => {
    const [range, setRange] = useState([0]);
    const [slice, setSlice] = useState<beerType[]>([]);

    const calculateRange = (data: beerType[], cardsPerPage: number) => {
        const range = [];
        const num = Math.ceil(data.length / cardsPerPage);
        for (let i = 1; i <= num; i++) {
            range.push(i);
        }
        return range;
    };

    const sliceData = (data: beerType[], page: number, cardsPerPage: number) => {
        return data.slice((page - 1) * cardsPerPage, page * cardsPerPage);
    };

    useEffect(() => {
        const range = calculateRange(props.beers, props.cardsPerPage);
        setRange([...range]);

        const slice = sliceData(props.beers, props.page, props.cardsPerPage);
        setSlice([...slice]);
    }, [props.beers, setRange, props.page, setSlice]);

    return {
        slice,
        range
    };
};