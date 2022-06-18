import {makeStyles} from "@mui/styles";
import { useEffect } from "react";
import { CountdownUnit } from "../atoms/CountdownUnit";
import useCountDown from "react-countdown-hook";

const useStyles = makeStyles({
    container: {
        background: 'linear-gradient(90deg, rgba(168, 75, 44, 0.7) 0%, rgba(205, 122, 46, 0.7) 37.39%, rgba(251, 184, 0, 0.7) 71.28%, rgba(255, 251, 243, 0.7) 100.31%)',
        height: 50,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
});

const weddingAt = new Date(2022, 7, 13, 14, 0, 0, 0);
const now = new Date();
const difference = weddingAt.getTime() - now.getTime();

export const Countdown = () => {
    const classes = useStyles();

    const [timeLeft, actions] = useCountDown(difference, 1000);
    useEffect(() => actions.start(), [actions]);

    return (
        <div className={classes.container}>
            <CountdownUnit unityName="Dias" quantity={Math.floor(timeLeft / (1000 * 60 * 60 * 24))} />
            <CountdownUnit unityName="Horas" quantity={Math.floor(timeLeft / (1000 * 60 * 60)) % 24} />
            <CountdownUnit unityName="Minutos" quantity={Math.floor(timeLeft / (1000 * 60)) % 60} />
            <CountdownUnit unityName="Segundos" quantity={Math.floor(timeLeft / 1000) % 60} />
        </div>
    );
};