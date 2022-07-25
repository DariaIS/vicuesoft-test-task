import { FC } from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import { beerType } from "@types";

type beersTypeProps = {
    beers: [beerType];
}

export const getStaticProps: GetStaticProps = async () => {
    const data =
        await fetch('https://api.punkapi.com/v2/beers')
            .then((response) => {
                return response.json();
            });

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { beers: data },
    }
};

const Beers: FC<beersTypeProps> = ({ beers }) => (
    <>
        <ul>
            {beers && beers.map(({ id, name }) => (
                <li key={id}>
                    <Link href={`${id}`}>{name}</Link>
                </li>
            ))}
        </ul>
    </>
);

export default Beers;