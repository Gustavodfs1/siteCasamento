import {HappyCouple} from "../atoms/HappyCouple";
import {Countdown} from "../molecules/Countdown";
import {We} from "../molecules/We";
import {Quote} from "../molecules/Quote";
import {StuffUNeed2Know} from "../molecules/StuffUNeed2Know";
import {Where} from "../molecules/Where";
import {Gifts} from "../molecules/Gifts";
import {Godmothers} from "../molecules/Godmothers";
import {Rspv} from "../molecules/Rspv";

export const Home = () => (
    <div>
        <HappyCouple />
        <Countdown />
        <We />
        <Quote />
        <StuffUNeed2Know />
        <Where />
        <Gifts />
        <Godmothers />
        <Rspv />
    </div>
);