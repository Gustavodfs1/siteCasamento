import {makeStyles, styled} from "@mui/styles";
import {Title} from "../atoms/Title";
import "react-multi-carousel/lib/styles.css";
import {useState} from "react";
import {Container} from "@mui/material";
import {useForm} from "react-hook-form";

import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const useStyles = makeStyles({
    container: {
        // left: 0,
        backgroundImage: 'url("/img/foto7.jpg")',
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
        color: 'white',
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
    width: '160px !important',
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
                <Form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label></Form.Label>
                        <Form.Control type="nome" placeholder="Seu nome" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label></Form.Label>
                        <Form.Control type="mensagem" placeholder="Mensagem" />
                    </Form.Group>
                    <Form.Label style={{color:"white"}}>Indique a quantidade de confirmados</Form.Label>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Select size="sm" style={{width:"60%"}} aria-label="Convites incluindo voce">
                            <option>Quantidade</option>
                            <option value="1">1 - Incuindo o seu</option>
                            <option value="2">2 - Incuindo o seu</option>
                            <option value="3">3 - Incuindo o seu</option>
                            <option value="4">4 - Incuindo o seu</option>
                            <option value="5">5 - Incuindo o seu</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
                <DebsButton variant="contained" target="_blank" >
                   <a style={{color: "white"}}> ENVIAR</a>
                </DebsButton>
            </Container>
        </div>
    );
};