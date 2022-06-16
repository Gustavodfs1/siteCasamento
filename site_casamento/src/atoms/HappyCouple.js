import {Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    container: {
        background: 'url(/img/happy_couple.jpg), radial-gradient(circle, rgba(0,0,0,0.39931722689075626) 0%, rgba(255,255,255,0.2553396358543417) 89%, rgba(255,255,255,0.04525560224089631) 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '17rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: "white",
        fontFamily: 'SaltyFeathers !important',
        fontSize: '5rem !important',
        textAlign: 'center',
        paddingTop: '3rem'
    },
    rspvContainer: {
        border: '1px solid rgba(255, 255, 255, 0.7);',
        borderWidth: '1px 0',
        marginTop: '2rem',
        cursor: 'pointer'
    },
    rspv: {
        color: 'white',
        fontSize: '14px !important',
        fontFamily: '"Red Hat Display", sans-serif !important',
        fontWeight: '700 !important',
        padding: '.2rem 0',
        cursor: 'pointer',
        letterSpacing: '.27em !important'
    },
});

export const HappyCouple = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography className={classes.title} variant="h1">deborah e gustavo</Typography>
            <a href="#rspv">
                <div className={classes.rspvContainer} onClick={() => document.getElementById('rspv').scrollIntoView()}>
                    <Typography className={classes.rspv} variant="body1">RSPV</Typography>
                </div>
            </a>
        </div>
    );
};