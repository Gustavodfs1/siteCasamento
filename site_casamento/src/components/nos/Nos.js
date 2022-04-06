import React from 'react';
import './Nos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import gu from '../../assets/gu-perfil.jpeg';
import deh from '../../assets/deh-perfil.jpeg';

function nos() {
    return (
        <div className="container-nos">
            <div className="subtitulo">
                <h1 >NÓS</h1>
            </div>
            <div>
                <img className="nossas-fotos" src={gu} />
                <img className="nossas-fotos" src={deh} />
            </div>
            <div className="legenda-foto1">
                <h1>NOIVO</h1>
                <h3>Gustavo Faria</h3>
            </div>
            <div className="legenda-foto2">
                <h1>NOIVA</h1>
                <h3>Deborah Vilas Boas</h3>
            </div>
            <div className="historia">
                <a>
                    Nossa história começou 8 anos atrás. Éramos duas pessoas com uma coisa em comum: a escolha de estar um com o outro e trilhar a jornada da vida juntos.
                    De lá pra cá, nossa relação foi permeada de crescimento, aprendizado, diálogo,  amadurecimento, respeito e muuuuuito amor e carinho. Os planos foram sendo sonhados 
                    e cada sonho vem sendo realizado de forma muito melhor do que imaginávamos, Deus sempre nos mima em cada detalhe.
                    Em 2021, decidimos dar mais um passo nessa caminhada, e nada mais a nossa cara que comemorar isso com pessoas que amamos. Bora festejar?
                </a>
            </div>
        </div>
    )
}

export default nos;