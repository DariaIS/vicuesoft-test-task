import { FC } from "react";
import { GetStaticProps } from "next";

import { beerType } from "@types";
import { Cards } from "@components/scss";

type beersTypeProps = {
    beers: beerType[];
    page: number;
}

export const getStaticProps: GetStaticProps = async () => {
    const data =
        await fetch(`https://api.punkapi.com/v2/beers`)
            .then((response) => {
                return response.json();
            });

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            beers: data
        },
    }
};

const Beers: FC<beersTypeProps> = ({ beers }) => {
    return (
        <div className='pageContainer section'>
            <Cards beers={beers} />
        </div>
    )
};

export default Beers;