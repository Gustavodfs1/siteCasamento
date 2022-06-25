import {Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => {
    return {
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
            letterSpacing: '0.27em !important',
            [theme.breakpoints.up('md')]: {
                fontSize: '26px !important',
            }
        },
        subtitle: {
            color: '#A84B2C',
            fontFamily: '"Fakt Pro", sans-serif !important',
            fontSize: '12px !important',
            paddingTop: '.8rem',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 14,
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            letterSpacing: '0.095em !important',
            [theme.breakpoints.up('md')]: {
                fontSize: '18px !important',
            }
        },
        pic: {
            borderRadius: '5rem',
            width: '100px !important',
            height: '100px !important',
            backgroundSize: 'cover',
            [theme.breakpoints.up('md')]: {
                height: '200px !important',
                width: '200px !important',
            }
        },
    }
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