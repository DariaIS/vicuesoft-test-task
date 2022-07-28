import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import { BeerInfo } from "@components/scss/beerInfo";
import { beerType } from "@types";

type beerTypeProps = {
    beer: beerType;
}

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const getStaticPaths: GetStaticPaths = async () => {
    const beers: beerType[] = await fetch(`https://api.punkapi.com/v2/beers/`)
        .then((response) => {
            return response.json();
        });
    const paths = beers.map(beer => ({ params: { id: beer.id.toString() } }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const id = context.params!.id;
    const data =
        await fetch(`vicuesoft-test-task/beers/${id}`)
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
