import {Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    container: {
        // height: '17rem',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        color: '#304E74',
        fontFamily: '"Red Hat Display", sans-serif !important',
        fontSize: '14px !important',
        textAlign: 'center',
        fontWeight: '500 !important',
        paddingTop: '.8rem',
        letterSpacing: '0.27em !important'
    },
    subtitle: {
        color: '#A84B2C',
        fontFamily: '"Fakt Pro", sans-serif !important',
        fontSize: '12px !important',
        // textAlign: 'center',
        paddingTop: '.8rem',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 14,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: '0.095em !important',
    },
    pic: {
        borderRadius: '5rem',
        width: '100px !important',
        // maxWidth: '10rem !important',
        height: '100px !important',
        // maxHeight: '10rem !important',
        backgroundSize: 'cover',
    },
});

export const Profile = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.pic} style={{backgroundImage: 'url("' + props.pic + '")'}}/>
            <Typography className={classes.title} variant="h2">{props.title}</Typography>
            <Typography className={classes.subtitle} variant="h3">{props.subtitle}</Typography>
        </div>
    );
};