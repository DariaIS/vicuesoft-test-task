import { FC } from "react";
import { GetStaticProps } from "next";

import { beerType } from "@types";
import { Cards } from "@components/scss";

type HomeTypeProps = {
    beers: beerType[];
}

export const getStaticProps: GetStaticProps<HomeTypeProps> = async () => {
    const data: beerType[] =
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

const Home: FC<HomeTypeProps> = ({ beers }) => {
    return (
        <div className='pageContainer section'>
            <Cards beers={beers} />
        </div>
    )
};

export default Home;
