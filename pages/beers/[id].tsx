import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import { BeerInfo } from "@components/scss/beerInfo";
import { beerType } from "@types";

type beerTypeProps = {
    beer: beerType;
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const id = context.params!.id;
    const data =
        await fetch(`https://api.punkapi.com/v2/beers/${id}`)
            .then((response) => {
                return response.json();
            })

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { beer: data[0] },
    }
};

const Beer: FC<beerTypeProps> = ({ beer }) => (
    <div className='pageContainer section'>
        <BeerInfo beer={beer} />
    </div>
);

export default Beer;