import React from 'react';
import './Saber.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagem from '../../assets/citacao.jpg';


function Saber() {
    return (
        <div className="citacao">
            <text className="TituloSaber">O que preciso saber ?</text>
        <div className="container-saber"> </div>
        <text className="SubTituloHorario">Horário</text>
        <text className="TextoHorario">
O horár io combinado é 14h30.
<br></br>Não se atrase para aproveitar
muuuuito!<br></br>

Depois não  adianta reclamar que
acabou cedo rs
</text>
<text className="SubTituloPiso">Piso</text>
        <text className="TextoPiso">
        No espaço da cerimönia, o piso é
de pedras.<br></br>

Evite saltos finos para ficar à
vontade! :D
</text>
        </div>
    )
}

export default Saber;