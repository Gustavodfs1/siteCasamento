import {makeStyles} from "@mui/styles";


const useStyles = makeStyles((theme) => {
    return {
        title: {
            color: '#304E74',
            fontFamily: '"Red Hat Display", sans-serif !important',
            fontSize: '18px !important',
            textAlign: 'center',
            paddingTop: '3rem',
            fontWeight: '700 !important',
            letterSpacing: '3px !important',
            [theme.breakpoints.up('md')]: {
                fontSize: '40px !important',
            }
        },
    }
});

export const Title = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.title}>{props.text}</div>
    );
};