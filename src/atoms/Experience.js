import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      // height: '17rem',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '74px !important',
      margin: '0 auto',
      [theme.breakpoints.up('md')]: {
        maxWidth: '160px !important',
      }
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
      margin: '.8rem 0',
      height: '2rem',
      [theme.breakpoints.up('md')]: {
        fontSize: '16px',
        lineHeight: '140%',
        height: '4rem'
      }
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
      [theme.breakpoints.up('md')]: {
        fontSize: '16px',
      }
    },
    pic: {
      width: '74px !important',
      height: '86px !important',
      backgroundSize: 'cover',
      [theme.breakpoints.up('md')]: {
        width: '160px !important',
        height: '160px !important',
      }
    },
  }
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