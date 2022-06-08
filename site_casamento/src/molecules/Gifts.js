import {makeStyles, styled} from "@mui/styles";
import {Title} from "../atoms/Title";
import Carousel from "react-multi-carousel"; // https://www.npmjs.com/package/react-multi-carousel
import "react-multi-carousel/lib/styles.css";
import {Experience} from "../atoms/Experience";
import {useState} from "react";
import {Button, Container, Grid} from "@mui/material";

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
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2rem'
    },
});

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 1200},
        items: 12
    },
    desktop: {
        breakpoint: {max: 1200, min: 992},
        items: 9
    },
    tablet: {
        breakpoint: {max: 992, min: 600},
        items: 6
    },
    mobile: {
        breakpoint: {max: 600, min: 0},
        items: 4,
        slidesToSlide: 3
    }
};


const DebsButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 12,
    padding: '1.5rem !important',
    backgroundColor: '#304E74 !important',
    border: '2px #304E74 solid !important',
    height: '36px',
    width: '240px !important',
    borderRadius: '40px !important',
    letterSpacing: '0.27em !important',
    fontFamily: [
        'Red Hat Display',
    ].join(','),
    '&:hover': {
        backgroundColor: '#ffffff !important',
        borderColor: '#0062cc',
        boxShadow: 'none',
        color: '#304E74'
    },
});

const experiences = [
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
];

export const Gifts = () => {
    const classes = useStyles();
    const [isExpanded, setExpanded] = useState(false);

    return (
        <div className={classes.container}>
            <Container>
                <Title text="VAMOS AMAR OS RECEBIDOS!"/>
                <div className={classes.subtitle}>Lista de presentes</div>
                <div className={classes.lists}>
                    <img src="/img/camicado.png" alt="CAMICADO"/>
                    <img src="/img/ponto.png" alt="PONTO"/>
                </div>
                <div className={classes.experiencesSubtitle}>
                    Caso prefira, vamos amar ser presenteados com experiências para a Lua-de-Mel!
                </div>
                <div className={classes.experiences}>
                    {isExpanded ?
                        <Grid container>
                            {experiences.map(item =>
                                <Grid item xs={3} sm={2} lg={1} justifyContent="center" style={{margin: '1rem 0'}}>
                                    <Experience pic={item.pic} title={item.title} price={item.price}/>
                                </Grid>
                            )}
                        </Grid> :
                        <Carousel responsive={responsive}>
                            {experiences.map(item =>
                                <Experience pic={item.pic} title={item.title} price={item.price}/>
                            )}
                        </Carousel>
                    }
                    <div className={classes.buttonContainer}>
                        <DebsButton variant="contained" target="_blank" onClick={() => setExpanded(!isExpanded)}>
                            VER {isExpanded ? 'MENOS' : 'MAIS'}
                        </DebsButton>
                    </div>
                </div>
            </Container>
        </div>
    );
};