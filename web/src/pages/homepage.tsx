import React from 'react';
import "../styles/global.css";
import '../styles/landing.css';
import LogoImg from '../img/Logo.svg';
import IlustraCrianca from '../img/crianca.svg';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={LogoImg} alt="logo da happy" />
                <main>
                    <h1>
                        Leve felicidade ao mundo.
        </h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>

                <div className="locatio">
                    <strong>Papanduva</strong>
                    <span>Santa Catarina</span>
                </div>

                <Link to="/orfanatos-mapa" className="enter-app">
                    <FiArrowRight size={26} color='rgba(0,0,0,0.6)' />
                </Link>


            </div>
        </div>

    );
}

export default App;