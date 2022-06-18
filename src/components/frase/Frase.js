import React from 'react';
import './Frase.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagem from '../../assets/citacao.jpg';


function Frase() {
    return (
        <div className="citacao">
        <div className="container-frase"> </div>
        <text className="frase">Amo-te afim, de um calmo amor prestante,
E te amo além, presente na saudade.
Amo-te, enfim, com grande liberdade
Dentro da eternidade e a cada instante.</text>

        <text className="frase2">Vinicius de Morais</text>
        </div>
    )
}

export default Frase;