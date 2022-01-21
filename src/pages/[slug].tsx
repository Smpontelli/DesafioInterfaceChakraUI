import { GetServerSideProps } from "next";
import BannerSectionContinent from "../components/Continents/BannerSectionContinent";
import Header from "../components/Header";

export default function Continentes(response) { 

    return (
        <>
            <Header/>
            <BannerSectionContinent continent={response}/>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const {slug} = params;

    const continents = ['europa', 'asia', 'america', 'oceania', 'africa'];

    const continentsExist = continents.findIndex(continente => continente === slug);

    if(continentsExist === -1) {
        return {
            redirect : {
                destination: '/',
                permanent: false,
            }
        }
    }

    return {
        props: {
            slug
        }
    }
}