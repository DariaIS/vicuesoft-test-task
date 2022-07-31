import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from 'next/router';

import { BeerInfo } from "@components/sections/beerInfo";
import { beerType } from "@types";

type beerTypeProps = {
    beer: beerType;
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
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

export const getStaticProps: GetStaticProps<beerTypeProps> = async (context) => {
    const id = context.params?.id as string;
    const data: beerType[] =
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

const Beer: FC<beerTypeProps> = ({ beer }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading......I'm sorry for the wait!!</div>;
    }
    return (
        <div className='pageContainer section'>
            <BeerInfo beer={beer} />
        </div>
    )
};

export default Beer;
