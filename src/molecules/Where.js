import {Button, Container, Grid} from "@mui/material";
import {makeStyles, styled} from "@mui/styles";
import {Title} from "../atoms/Title";

const useStyles = makeStyles((theme) => {
  return {
  container: {
    left: 0,
    backgroundColor: '#E1E6E9',
    // backgroundImage: 'url("/img/quote.png")',
    backgroundSize: 'cover',
    padding: '0 2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  text: {
    fontFamily: '"Red Hat Display", sans-serif !important',
    fontStyle: 'normal',
    fontWeight: '700 !important',
    fontSize: '10px !important',
    lineHeight: '160% !important',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: '0.27em !important',
    textTransform: 'uppercase',
    color: '#FFFBF3'
  },
  subtitle: {
    fontFamily: 'Fakt Pro',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '16px',
    lineHeight: '19px',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: '0.095em',
    color: '#2E2B28',
    width: '100%',
    marginTop: '.5rem'
  },
  eventTitle: {
    fontFamily: 'Red Hat Display',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '19px',
    alignItems: 'center',
    letterSpacing: '0.27em',
    textTransform: 'uppercase',
    color: '#A84B2C',
    marginTop: '2rem',

    [theme.breakpoints.up('md')]: {
      marginTop: '5rem'
    }
  },
  dateAndLocation: {
    fontFamily: 'Fakt Pro',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '12px',
    lineHeight: '140%',
    // alignItems: 'center',
    textAlign: 'left',
    letterSpacing: '0.095em',
    color: '#2E2B28',
    marginTop: '1rem'
  },
  // button: {
  //     background: '#304E74',
  //     borderRadius: '50%'
  // },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'left'
    }
  }}
});

const DebsButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 12,
  padding: '1.5rem !important',
  backgroundColor: '#304E74 !important',
  border: '2px #304E74 solid !important',
  height: '36px',
  width: '240px !important',
  borderRadius: '40px !important',
  letterSpacing: '0.27em !important',
  fontFamily: [
    'Red Hat Display',
  ].join(','),
  '&:hover': {
    backgroundColor: '#ffffff !important',
    borderColor: '#0062cc',
    boxShadow: 'none',
    color: '#304E74'
  },
});

export const Where = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Title text="TÁ E ONDE VAI SER?"/>
      <div className={classes.subtitle}>
        Vamo que vamo!
      </div>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <div className={classes.eventTitle}>
              Cerimônia e recepção
            </div>
            <div className={classes.dateAndLocation}>
              13 de agosto de 2022, às 14h30
            </div>
            <div className={classes.dateAndLocation}>
              <b>Sítio Paraíso da Mata</b><br/>
            </div>
            <div className={classes.dateAndLocation} style={{marginTop: '.3rem'}}>
              Condomínio Alto das Maravilhas s/n<br/>
              33200-000 | Vespasiano - MG
            </div>
            <div className={classes.buttonContainer}>
              <DebsButton variant="contained" href="https://maps.app.goo.gl/SfU6gLadrahenwXb9" target="_blank">
                INICIAR ROTA
              </DebsButton>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15022.585344500681!2d-43.9037069!3d-19.7276757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6905b6ff18582c0c!2sS%C3%ADtio%20Para%C3%ADso%20da%20Mata!5e0!3m2!1spt-BR!2sbr!4v1654476437758!5m2!1spt-BR!2sbr"
              height="320"
              style={{border: 0, margin: '30px 0', width: '100%', boxShadow: '2px 4px 8px 1px rgba(0,0,0,0.11)'}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa"
            />
          </Grid>
        </Grid>
      </Container>


    </div>
  );
};