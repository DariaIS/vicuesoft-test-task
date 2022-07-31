import { useState, useEffect, ChangeEventHandler } from 'react';

import { beerType } from "@types";

type Props = {
    beers: beerType[];
    page: number;
    cardsPerPage: number;
};

export const useCards = (props: Props) => {
    const [range, setRange] = useState([0]);
    const [slice, setSlice] = useState<beerType[]>([]);
    const [searchName, setSearchName] = useState('');

    const handleChangeInput: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
        setSearchName(value);
    };

    const calculateRange = (data: beerType[], cardsPerPage: number) => {
        const range = [];
        const num = Math.ceil(data.length / cardsPerPage);
        for (let i = 1; i <= num; i++) {
            range.push(i);
        }
        return range;
    };

    const searchData = (data: beerType[]) => {
        return data.filter(element => (element.name.toString().toLowerCase().includes(searchName.toLowerCase())))
    };

    const sliceData = (data: beerType[], page: number, cardsPerPage: number) => {
        return data.slice((page - 1) * cardsPerPage, page * cardsPerPage);
    };

    useEffect(() => {
        const data = searchData(props.beers);
        const range = calculateRange(data, props.cardsPerPage);
        setRange([...range]);

        const slice = sliceData(data, props.page, props.cardsPerPage);
        setSlice([...slice]);
    }, [props.beers, setRange, props.page, setSlice, searchName]);

    return {
        slice,
        range,
        handleChangeInput
    };
};
