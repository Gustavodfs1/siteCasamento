import {Container, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Profile} from "../atoms/Profile";
import {Title} from "../atoms/Title";

const useStyles = makeStyles((theme) => {
    return {
        container: {
            display: 'flex',
            flexDirection: 'column',
            // justifyContent: 'center',
            alignItems: 'center',
            padding: '0 2rem 2rem',
        },
        profiles: {
            display: 'flex',
            justifyContent: 'space-evenly',
            width: '100%',
            paddingTop: '1.3rem',
            [theme.breakpoints.up('md')]: {

            }
            // alignItems: 'center',
            // padding: '0 2rem',
        },
        text: {
            fontFamily: '"Fakt Pro", sans-serif !important',
            fontWeight: "300 !important",
            fontSize: "10px !important",
            lineHeight: "160% !important",
            letterSpacing: "0.095em !important",
            padding: "1.5rem 0 0",
            [theme.breakpoints.up('md')]: {
                fontSize: "18px !important",
            }
        },
    }
});

export const We = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Title text="NÓS"/>
            <div className={classes.profiles}>
                <Profile pic={'/img/deh.png'} title="NOIVA" subtitle="Deborah Vilas Boas"/>
                <Profile pic={'/img/guh.png'} title="NOIVO" subtitle="Gustavo Faria"/>
            </div>
            <Container>
                <Typography variant="body1" className={classes.text}>
                    Nossa história começou 8 anos atrás. Éramos duas pessoas com uma coisa em comum: a escolha de estar um
                    com o outro e trilhar a jornada da vida juntos.
                    De lá pra cá, nossa relação foi permeada de crescimento, aprendizado, diálogo, amadurecimento, respeito
                    e muuuuuito amor e carinho. Os planos foram sendo sonhados e cada sonho vem sendo realizado de forma
                    muito melhor do que imaginávamos, Deus sempre nos mima em cada detalhe.
                </Typography>
                <Typography variant="body1" className={classes.text}>
                    Em 2021, decidimos dar mais um passo nessa caminhada, e nada mais a nossa cara que comemorar isso com
                    pessoas que amamos. Bora festejar?
                </Typography>
            </Container>
        </div>
    );
};