import {HappyCouple} from "../atoms/HappyCouple";
import {Countdown} from "../molecules/Countdown";
import {We} from "../molecules/We";
import {Quote} from "../molecules/Quote";
import {StuffUNeed2Know} from "../molecules/StuffUNeed2Know";

export const Home = () => (
    <div>
        <HappyCouple />
        <Countdown />
        <We />
        <Quote />
        <StuffUNeed2Know />
    </div>
);