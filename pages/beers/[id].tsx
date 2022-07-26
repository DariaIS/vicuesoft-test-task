import { FC } from "react";
import { GetServerSideProps } from "next";

import { beerType } from "@types";
import { BeerInfo } from "@components/scss";

type beerTypeProps = {
    beer: beerType;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.params!.id;
    console.log(id);
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
    <>
        <BeerInfo beer={beer} />
    </>
);

export default Beer;