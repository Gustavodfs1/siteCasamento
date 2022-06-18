import {Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    container: {
        height: 172,
        left: 0,
        backgroundImage: 'url("/img/foto4.jpg")',
        backgroundSize: 'cover',
        padding: '0 2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
        
    },
    text: {
        fontFamily: '"Red Hat Display", sans-serif !important',
        fontStyle: 'normal',
        fontWeight: '700 !important',
        fontSize: '10px !important',
        lineHeight: '160% !important',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: '0.27em !important',
        textTransform: 'uppercase',
        color: '#FFFBF3'
    },
    author: {
        fontFamily: 'SaltyFeathers !important',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '32px !important',
        lineHeight: 35,
        alignItems: 'center',
        textAlign: 'center',
        textTransform: 'lowercase',
        color: '#FFFBF3'
    },
});

export const Quote = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography variant="body1" className={classes.text}>
                "Amo-te afim, de um calmo amor prestante,
                E te amo além, presente na saudade.
                Amo-te, enfim, com grande liberdade
                Dentro da eternidade e a cada instante."
            </Typography>
            <Typography variant="body1" className={classes.author}>Vinicius de Morais</Typography>
        </div>
    );
};