import {Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import { Stuff } from "../atoms/Stuff";
import { Title } from "../atoms/Title";

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
    }
});

export const StuffUNeed2Know = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Title text="O QUE EU PRECISO SABER?" />
            <div className={classes.stuffs}>
                <div className={classes.verticalThing}></div>
                <div>
                    <Stuff pic="/img/icon_clock.png" title="HORÁRIO" text={["O horário combinado é <b>14h30</b>.", "Não se atrase para aproveitar muuuuito!", "Depois não vem reclamar que acabou cedo rs"]} />
                    <Stuff pic="/img/icon_car.png" title="ESTACIONAMENTO" text={["Temos estacionamento disponível.", "Mas <b>Só vá de carro se não for beber</b> ;)"]} />
                    <Stuff pic="/img/icon_check.png" title="CONFIRME PRESENÇA" text={["Não se esqueça de confirmar sua presença através do RSPV aqui do site ;)"]} />
                    <Stuff pic="/img/icon_floor.png" title="PISO" text={["No espaço da cerimônia, <b>o piso é de pedras.</b>", "<b>Evite saltos finos</b> para ficar à vontade! :D"]} />
                </div>
            </div>
        </div>
    );
};