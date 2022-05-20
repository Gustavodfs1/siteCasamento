import {Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Profile} from "../atoms/Profile";

const useStyles = makeStyles({
    container: {
        height: '17rem',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        padding: '0 2rem',
    },
    title: {
        color: '#304E74',
        fontFamily: '"Red Hat Display", sans-serif !important',
        fontSize: '18px !important',
        textAlign: 'center',
        paddingTop: '3rem',
        fontWeight: '700 !important',
        lineHeight: 24,
        letterSpacing: '3px !important'
    },
    profiles: {
        // height: '17rem',
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        paddingTop: '1.3rem'
        // alignItems: 'center',
        // padding: '0 2rem',
    },
    text: {
        fontFamily: '"Fakt Pro", sans-serif !important',
        fontWeight: "300 !important",
        fontSize: "10px !important",
        lineHeight: "160% !important",
        letterSpacing: "0.095em !important",
        padding: "1.5rem 0 0"
    },
});

export const We = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography className={classes.title} variant="h1">NÓS</Typography>
            <div className={classes.profiles}>
                <Profile pic={'/img/deh.jpg'} title="NOIVA" subtitle="Deborah Vilas Boas" />
                <Profile pic={'/img/guh.jpg'} title="NOIVO" subtitle="Gustavo Faria" />
            </div>
            <Typography variant="body1" className={classes.text}>
                Nossa história começou 8 anos atrás. Éramos duas pessoas com uma coisa em comum: a escolha de estar um com o outro e trilhar a jornada da vida juntos.
                De lá pra cá, nossa relação foi permeada de crescimento, aprendizado, diálogo,  amadurecimento, respeito e muuuuuito amor e carinho. Os planos foram sendo sonhados e cada sonho vem sendo realizado de forma muito melhor do que imaginávamos, Deus sempre nos mima em cada detalhe.
            </Typography>
            <Typography variant="body1" className={classes.text}>
                Em 2021, decidimos dar mais um passo nessa caminhada, e nada mais a nossa cara que comemorar isso com pessoas que amamos. Bora festejar?
            </Typography>
        </div>
    );
};