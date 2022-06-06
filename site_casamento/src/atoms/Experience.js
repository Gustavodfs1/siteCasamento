import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    container: {
        // height: '17rem',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        width: '80px !important',
    },
    title: {
        fontFamily: 'Fakt Pro',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '10px',
        lineHeight: '12px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: '0.095em',
        color: '#000000',
        margin: '.8rem 0'
    },
    subtitle: {
        fontFamily: 'Fakt Pro',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '10px',
        lineHeight: '160%',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: '0.095em',
        color: '#000000',
    },
    pic: {
        // borderRadius: '5rem',
        width: '74px !important',
        // maxWidth: '10rem !important',
        height: '86px !important',
        // maxHeight: '10rem !important',
        backgroundSize: 'cover',
    },
});

export const Experience = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.pic} style={{backgroundImage: 'url("' + props.pic + '")'}}/>
            <div className={classes.title}>{props.title}</div>
            <div className={classes.subtitle}>R$ {props.price}</div>
        </div>
    );
};