import {Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";


const useStyles = makeStyles({
    title: {
        color: '#304E74',
        fontFamily: '"Red Hat Display", sans-serif !important',
        fontSize: '18px !important',
        textAlign: 'center',
        paddingTop: '3rem',
        fontWeight: '700 !important',
        lineHeight: 24,
        letterSpacing: '3px !important',
    },
});

export const Title = (props) => {
    const classes = useStyles();
    return(
        <Typography className={classes.title} variant="h2">{props.text}</Typography>
    );
};