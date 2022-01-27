import { GetServerSideProps } from "next";
import Header from "../components/Header";
import BannerSectionContinent from "../components/Continents/BannerSectionContinent";
import DescriptionDetailsContent from "../components/Continents/DescriptionDetailsContent";
import Cities100More from "../components/Continents/Cities100More";

export default function Continentes(response) { 

    return (
        <>
            <Header/>
            <BannerSectionContinent continent={response}/>
            <DescriptionDetailsContent continent={response}/>
            <Cities100More continent={response}/>
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