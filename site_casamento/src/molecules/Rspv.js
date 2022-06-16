import {makeStyles, styled} from "@mui/styles";
import {Title} from "../atoms/Title";
import Carousel from "react-multi-carousel"; // https://www.npmjs.com/package/react-multi-carousel
import "react-multi-carousel/lib/styles.css";
import {Experience} from "../atoms/Experience";
import {useState} from "react";
import {Button, Container, Grid, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const useStyles = makeStyles({
    container: {
        // left: 0,
        backgroundSize: 'cover',
        padding: '0 2rem',
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
        fontFamily: 'Red Hat Display',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '12px',
        lineHeight: '16px',
        textAlign: 'center',
        letterSpacing: '0.27em',
        textTransform: 'uppercase',
        color: '#2E2B28',
        marginTop: '1rem'
    },
    experiencesSubtitle: {
        fontFamily: 'Fakt Pro',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: 10,
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
        marginTop: '2rem'
    },
    inputContainer: {
        display: 'flex',
        alignItems: 'end'
    },
    inputField: {
        width: '100% !important'
    }
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

export const Rspv = () => {
    const classes = useStyles();
    // const [isExpanded, setExpanded] = useState(false);
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    return (
        <div id="rspv" className={classes.container}>
            <Container>
                <Title text="CONFIRME SUA PRESENÇA"/>
                <div className={classes.subtitle}>E NOS VEMOS LÁ! ;)</div>
                <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                    <div className={classes.inputContainer}>
                        <PersonOutlineIcon/>
                        <TextField label="Nome completo" variant="standard" classes={classes.inputField}/>
                    </div>
                    <div className={classes.inputContainer}>
                        <PhoneAndroidIcon/>
                        <TextField label="Telefone" variant="standard" />
                    </div>
                    <div className={classes.inputContainer}>
                        <PeopleAltIcon/>
                        <TextField label="Nome dos convidados" variant="standard" />
                    </div>
                </form>
                <DebsButton variant="contained" target="_blank" >
                    ENVIAR
                </DebsButton>
            </Container>
        </div>
    );
};