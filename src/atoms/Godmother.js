import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      minWidth: '100px',
      margin: '0 auto'
    },
    name: {
      fontFamily: 'Fakt Pro',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: 10,
      lineHeight: '12px',
      textAlign: 'center',
      letterSpacing: '0.095em',
      color: '#2E2B28',
      marginTop: 7,
      height: 24,
      [theme.breakpoints.up('md')]: {
        fontSize: 16,
      }
    },
    pic: {
      borderRadius: '50%',
      width: '100px',
      height: '100px',
      backgroundSize: 'cover',
    },
  }
});

export const Godmother = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.pic} style={{backgroundImage: 'url("' + props.pic + '")'}}/>
      <div className={classes.name}>{props.name}</div>
    </div>
  );
};