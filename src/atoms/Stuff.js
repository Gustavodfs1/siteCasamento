import {Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import { width } from "@mui/system";


const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        padding: '1rem 0',
    },
    pic: {
        backgroundColor: '#698093',
        borderRadius: '5rem',
        minWidth: '35px !important',
        minHeight: '35px !important',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginRight: '1rem',
        // backgroundAttachment: 'fixed'
    },
    title: {
        color: '#2E2B28',
        fontFamily: '"Red Hat Display", sans-serif !important',
        fontSize: '12px !important',
        textAlign: 'left',
        // paddingTop: '3rem',
        fontWeight: '500 !important',
        lineHeight: '16px !important',
        alignItems: 'center',
        letterSpacing: '0.27em !important',
        textTransform: 'uppercase',
        marginBottom: '.2rem !important'
    },
    text: {
        fontFamily: '"Fakt Pro", sans-serif !important',
        fontWeight: '300 !important',
        fontSize: '10px !important',
        lineHeight: '140% !important',
        letterSpacing: '0.095em !important',
        color: '#2E2B28 !important',
    },
    horizontalThing: {
        backgroundColor: '#2E2B28',
        minWidth: 25,
        height: 2
    },
});

export const Stuff = (props) => {
    const classes = useStyles();
    return(
        <div className={classes.container}>
            <div className={classes.horizontalThing}></div>
            <div className={classes.pic} style={{backgroundImage: 'url("' + props.pic + '")'}}/>
            <div>
                <Typography className={classes.title}>
                    {props.title}
                </Typography>
                {
                    props.text.map((item, index) =>
                        <div key={index} dangerouslySetInnerHTML={{__html: item}} className={classes.text}/>
                    )
                }
            </div>
        </div>
    );
};