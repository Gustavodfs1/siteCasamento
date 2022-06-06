import {makeStyles} from "@mui/styles";
import { Title } from "../atoms/Title";
import Carousel from "react-multi-carousel"; // https://www.npmjs.com/package/react-multi-carousel
import "react-multi-carousel/lib/styles.css";
import {Experience} from "../atoms/Experience";
import {useEffect, useState} from "react";

const useStyles = makeStyles({
    container: {
        // left: 0,
        backgroundSize: 'cover',
        padding: '0 2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    stuffs: {
        padding: '1rem 0',
        display: 'flex',
        justifyContent: 'center'
    },
    verticalThing: {
        backgroundColor: '#2E2B28',
        width: 2,
        margin: '1rem 0'
    },
    subtitle: {
        fontFamily: 'Fakt Pro',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: 14,
        textAlign: 'center',
        letterSpacing: '0.095em',
        color: '#304E74',
        margin: '1.3rem'
    },
    lists: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -10
    },
    experiencesSubtitle: {
        fontFamily: 'Fakt Pro',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: 10,
        lineHeight: '160%',
        alignItems: 'center',
        letterSpacing: '0.095em',
        color: '#000000',
        width: '60%',
        margin: '3rem 0 1.3rem'
    },
    experiences: {
        // display: 'flex',
        // justifyContent: 'center'
        textAlign: 'center'
    }
});

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export const Gifts = () => {
    const classes = useStyles();
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
       setExperiences([
           {
               title: 'Aquele jantarzinho à luz de velas',
               price: '300,00',
               pic: '/img/experience/luz-de-velas.jpg'
           },
           {
               title: 'Aquele jantarzinho à luz de velas',
               price: '300,00',
               pic: '/img/experience/luz-de-velas.jpg'
           },
           {
               title: 'Aquele jantarzinho à luz de velas',
               price: '300,00',
               pic: '/img/experience/luz-de-velas.jpg'
           },
           {
               title: 'Aquele jantarzinho à luz de velas',
               price: '300,00',
               pic: '/img/experience/luz-de-velas.jpg'
           },
        ])
    }, []);

    return (
        <div className={classes.container}>
            <Title text="VAMOS AMAR OS RECEBIDOS!" />
            <div className={classes.subtitle}>Lista de presentes</div>
            <div className={classes.lists}>
                <img src="/img/camicado.png" alt="CAMICADO" />
                <img src="/img/ponto.png" alt="PONTO" />
            </div>
            <div className={classes.experiencesSubtitle}>
                Caso prefira, vamos amar ser presenteados com experiências para a Lua-de-Mel!
            </div>
            <div className={classes.experiences}>
                <Carousel responsive={responsive}>
                    {experiences.map(item =>
                        <Experience pic={item.pic} title={item.title} price={item.price} />
                    )}
                </Carousel>
            </div>
        </div>
    );
};