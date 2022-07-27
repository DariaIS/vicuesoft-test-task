import { FC } from "react";

import { useRouter } from 'next/router'
import Link from "next/link";
import { GetServerSideProps } from "next";

import { beerType } from "@types";
import { Cards } from "@components/scss";

type beersTypeProps = {
    beers: [beerType];
    page: number;
}

export const getServerSideProps: GetServerSideProps = async ({ query: { page = 1 } }) => {
    const data =
        await fetch(`https://api.punkapi.com/v2/beers?page=${page}`)
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
            beers: data,
            page: +page,
        },
    }
};

const Beers: FC<beersTypeProps> = ({ beers, page }) => {
    const router = useRouter();

    return (
        <>
            <Cards beers={beers}/>
            <button
                onClick={() => router.push(`/beers?page=${page - 1}`)}
                disabled={page <= 1}
            >
                PREV
            </button>
            <button onClick={() => router.push(`/beers?page=${page + 1}`)}>
                NEXT
            </button>
            <Link href="/?page=1">
                <a>First page</a>
            </Link>
        </>
    )
};

export default Beers;