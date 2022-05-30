import {Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import { Stuff } from "../atoms/Stuff";
import { Title } from "../atoms/Title";

const useStyles = makeStyles({
    container: {
        height: 172,
        left: 0,
        backgroundSize: 'cover',
        padding: '0 2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    stuffs: {
        padding: '1rem 0',
        display: 'flex',
        justifyContent: 'center'
    },
    verticalThing: {
        backgroundColor: '#2E2B28',
        width: 1.5,
        height: '100%',
    }
});

export const StuffUNeed2Know = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Title text="O que eu preciso saber?" />
            <div className={classes.stuffs}>
                <div className={classes.verticalThing}></div>
                <div>
                    <Stuff pic="/img/icon_clock.png" title="HORÁRIO" text={"O horário combinado é 14h30. \\n Não se atrase para aproveitar muuuuito! Depois não vem reclamar que acabou cedo rs"} />
                </div>
            </div>
        </div>
    );
};