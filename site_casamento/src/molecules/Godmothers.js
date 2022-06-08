import {makeStyles} from "@mui/styles";
import { Title } from "../atoms/Title";
import Carousel from "react-multi-carousel"; // https://www.npmjs.com/package/react-multi-carousel
import "react-multi-carousel/lib/styles.css";
import {Container} from "@mui/material";
import {Godmother} from "../atoms/Godmother";

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
        fontSize: 10,
        textAlign: 'center',
        letterSpacing: '0.095em',
        color: '#304E74',
        margin: '1rem'
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
    godmothers: {
        // display: 'flex',
        // justifyContent: 'center',
        // width: '100%'
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2rem'
    },
    godmothersCollumn: {
        display: 'flex',
        flexDirection: 'column',
        height: '300px',
        justifyContent: 'space-around',
        // justifyContent: 'center',
        // marginTop: '2rem'
    },
});

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1200 },
        items: 7
    },
    desktop: {
        breakpoint: { max: 1200, min: 900 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 900, min: 650 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 650, min: 0 },
        items: 3,
        slidesToSlide: 2
    }
};

const godmothers = [
    {
        name1: 'Fernanda Vilas Boas',
        pic1: '/img/godmother/fernanda.png',
        name2: 'Anderson Faria',
        pic2: '/img/godmother/anderson.png',
    },
    {
        name1: 'Anderson Faria',
        pic1: '/img/godmother/anderson.png',
        name2: 'Fernanda Vilas Boas',
        pic2: '/img/godmother/fernanda.png',
    },
    {
        name1: 'Fernanda Vilas Boas',
        pic1: '/img/godmother/fernanda.png',
        name2: 'Anderson Faria',
        pic2: '/img/godmother/anderson.png',
    },
    {
        name1: 'Fernanda Vilas Boas',
        pic1: '/img/godmother/fernanda.png',
        name2: 'Anderson Faria',
        pic2: '/img/godmother/anderson.png',
    },
    {
        name1: 'Anderson Faria',
        pic1: '/img/godmother/anderson.png',
        name2: 'Fernanda Vilas Boas',
        pic2: '/img/godmother/fernanda.png',
    },
    {
        name1: 'Fernanda Vilas Boas',
        pic1: '/img/godmother/fernanda.png',
        name2: 'Anderson Faria',
        pic2: '/img/godmother/anderson.png',
    },
];

export const Godmothers = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Container>
                <Title text="MADRINHAS E PADRINHOS" />
                <div className={classes.subtitle}>Mais que amigos, friends!</div>
                <div className={classes.godmothers}>
                    <Carousel responsive={responsive}>
                        {godmothers.map((item, index) =>
                            <div key={index} className={classes.godmothersCollumn}>
                                <Godmother pic={item.pic1} name={item.name1} />
                                <Godmother pic={item.pic2} name={item.name2} />
                            </div>
                        )}
                    </Carousel>
                </div>
            </Container>
        </div>
    );
};