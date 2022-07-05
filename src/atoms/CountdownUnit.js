import {Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      background: 'transparent',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#2E2B28',
      height: '18rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      // padding: '0 2rem',
      [theme.breakpoints.up('md')]: {
        margin: '0 4rem'
      }
    },
    quantity: {
      color: '#2E2B28',
      fontWeight: '700 !important',
      fontSize: '24px !important',
      fontFamily: '"Red Hat Display", sans-serif !important',
      // lineHeight: '24px !important',
      // [theme.breakpoints.up('md')]: {
      //   // fontSize: '24px !important',
      // }
      [theme.breakpoints.up('md')]: {
        fontSize: '40px !important',
      }
    },
    unityName: {
      color: '#2E2B28',
      textTransform: 'uppercase',
      fontWeight: '400 !important',
      fontFamily: '"Red Hat Display", sans-serif !important',
      letterSpacing: '.27em !important',
      fontSize: '8px !important',
      [theme.breakpoints.up('md')]: {
        fontSize: '18px !important',
      }
    }
  }
});

export const CountdownUnit = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.quantity} variant="h2">{props.quantity}</Typography>
      <Typography className={classes.unityName} variant="body1">{props.unityName}</Typography>
    </div>
  );
};