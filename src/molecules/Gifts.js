import {makeStyles, styled} from "@mui/styles";
import {Title} from "../atoms/Title";
import Carousel from "react-multi-carousel"; // https://www.npmjs.com/package/react-multi-carousel
import "react-multi-carousel/lib/styles.css";
import {Experience} from "../atoms/Experience";
import {useState} from "react";
import {Box, Button, Container, Grid, Modal, Typography} from "@mui/material";
import { Icon } from "@mui/material";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      // left: 0,
      backgroundSize: 'cover',
      padding: '0 4rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    stuffs: {
      padding: '1rem 0',
      display: 'flex',
      justifyContent: 'center'
    },
    verticalThing: {
      backgroundColor: '#2E2B28',
      width: 2,
      margin: '1rem 0'
    },
    subtitle: {
      fontFamily: 'Fakt Pro',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: 14,
      textAlign: 'center',
      letterSpacing: '0.095em',
      color: '#304E74',
      margin: '1.3rem'
    },
    lists: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -10
    },
    experiencesSubtitle: {
      fontFamily: 'Fakt Pro',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: 16,
      lineHeight: '160%',
      alignItems: 'center',
      letterSpacing: '0.095em',
      color: '#000000',
      width: '60%',
      margin: '3rem 0 1.3rem'
    },
    experiences: {
      // display: 'flex',
      // justifyContent: 'center'
      textAlign: 'center'
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '2rem',
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      }
    },
  }
});

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: {max: 4000, min: 1200},
    items: 6
  },
  desktop: {
    breakpoint: {max: 1200, min: 992},
    items: 5
  },
  tablet: {
    breakpoint: {max: 992, min: 600},
    items: 4
  },
  mobile: {
    breakpoint: {max: 600, min: 0},
    items: 4,
    slidesToSlide: 3
  }
};


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

const experiences = [
  {
    title: 'Comprar tempero no Grand Bazar',
    price: '300,00',
    pic: '/img/experience/gift1.jpg'
  },
  {
    title: '#PraAcordar Tomar um Café Turco',
    price: '50,00',
    pic: '/img/experience/gift2.jpg'
  },
  {
    title: 'Passeio de balão na Capadócia',
    price: '600,00',
    pic: '/img/experience/gift3.jpg'
  },
  {
    title: 'Curtir um banho turco',
    price: '200,00',
    pic: '/img/experience/gift4.jpg'
  },
  {
    title: 'Comprar muito turkish delight',
    price: '100,00',
    pic: '/img/experience/gift5.jpg'
  },
  {
    title: 'Excesso de bagagem pra trazer presente',
    price: '350,00',
    pic: '/img/experience/gift6.jpg'
  },
  {
    title: 'Tapete persa, imagina?',
    price: '650,00',
    pic: '/img/experience/gift7.jpeg'
  },
  {
    title: 'Passeio pelo Bósforo',
    price: '230,00',
    pic: '/img/experience/gift8.jpg'
  },
  {
    title: 'Chip 5G pra postar tuuudo!',
    price: '45,00',
    pic: '/img/experience/chip-de-internet-na-europa.jpg'
  },
  {
    title: 'Lanche no aeroporto',
    price: '230,00',
    pic: '/img/experience/lanche.jpg'
  },
  {
    title: 'Passeio na cidade subterrânea',
    price: '270,00',
    pic: '/img/experience/cidade.jpg'
  },
  {
    title: 'Jantar à beira do Bósforo',
    price: '400,00',
    pic: '/img/experience/jantar.jpeg'
  },
];

export const Gifts = () => {
  const classes = useStyles();
  const [isExpanded, setExpanded] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={classes.container}>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      <Container>
        <Title text="VAMOS AMAR OS RECEBIDOS!"/>
        <div className={classes.subtitle}>Lista de presentes</div>
        <div className={classes.lists}>
          <a href=" https://lista.camicado.com.br/dehegu">
            <img src="/img/camicado.jpg" alt="CAMICADO"/>
          </a>
          <a href=" https://listas.pontofrio.com.br/dehegu">
            <img src="/img/ponto.jpg" alt="PONTO"/>
          </a>
        </div>
        <div className={classes.experiencesSubtitle}>
          Caso prefira, vamos amar ser presenteados com experiências para a Lua-de-Mel!
          Você pode fazer o pix para a chave cpf: <strong>066.728.156-86</strong>. <br/>                      
          Não esquece de deixar um recadinho pra gente <Icon ></Icon>
        </div>
        <div className={classes.experiences}>
          {isExpanded ?
            <Grid container>
              {experiences.map(item =>
                <Grid item xs={3} sm={2} lg={1} justifyContent="center" style={{margin: '1rem 0'}}>
                  <Experience pic={item.pic} title={item.title} price={item.price}/>
                </Grid>
              )}
            </Grid> :
            <Carousel responsive={responsive}>
              {experiences.map(item =>
                <Experience pic={item.pic} title={item.title} price={item.price}/>
              )}
            </Carousel>
          }
          <div className={classes.buttonContainer}>
            <DebsButton variant="contained" target="_blank" onClick={() => setExpanded(!isExpanded)}>
              VER {isExpanded ? 'MENOS' : 'MAIS'}
            </DebsButton>
          </div>
        </div>
      </Container>
    </div>
  );
};