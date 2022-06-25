import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => {
    return {
        container: {
            height: 172,
            // left: 0,
            backgroundImage: 'url("/img/foto4.jpg")',
            backgroundSize: 'cover',
            padding: '2rem 2rem 0',
            // display: 'flex',
            // flexDirection: 'column',
            // justifyContent: 'center',
            [theme.breakpoints.up('md')]: {
                padding: '4rem 2rem 0',
                height: 460,
            }
        },
        text: {
            fontFamily: '"Red Hat Display", sans-serif !important',
            fontStyle: 'normal',
            fontWeight: '700 !important',
            fontSize: '10px !important',
            textAlign: 'center',
            letterSpacing: '0.27em !important',
            textTransform: 'uppercase',
            color: '#FFFBF3',
            marginBottom: 0,
            [theme.breakpoints.up('md')]: {
                fontSize: '26px !important',
            }
        },
        author: {
            fontFamily: 'SaltyFeathers !important',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '32px !important',
            // lineHeight: 35,
            alignItems: 'center',
            textAlign: 'center',
            textTransform: 'lowercase',
            color: '#FFFBF3',
            [theme.breakpoints.up('md')]: {
                // alignItems: 'center',
                fontSize: '100px !important',
                // width: '80%'
            }
        },
    }
});

export const Quote = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <p className={classes.text}>
                "Amo-te afim, de um calmo amor prestante,
            </p>
            <p className={classes.text}>
                E te amo além, presente na saudade.
            </p>
            <p className={classes.text}>
                Amo-te, enfim, com grande liberdade
            </p>
            <p className={classes.text}>
                Dentro da eternidade e a cada instante."
            </p>
            <div className={classes.author}>Vinicius de Morais</div>
        </div>
    );
};