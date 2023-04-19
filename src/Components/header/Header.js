import React from 'react';

import './Header.css';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/img/logo.png';

function Header(){
    return (
        <header className='Header'>
            <Link className='Link' to={"/"}><img src={Logo} alt="Logo du site" /></Link>
            <nav>
                <Link to={"serveur-mutualise"}>
                    <i className="fa-solid fa-user" aria-hidden="true"></i>
                    Serveur mutualisé
                </Link>
                <Link to={"serveur-dedie"}>
                    <i className="fa-solid fa-user" aria-hidden="true"></i>
                    Serveur Dédié
                </Link>
                <Link to={"solution-cloud"}>
                    <i className="fa-solid fa-user" aria-hidden="true"></i>
                    Service Cloud
                </Link>
                <Link to={"contact"}>
                    <i className="fa-solid fa-user" aria-hidden="true"></i>
                    Contact
                </Link>

                {/* 
                <a href="./" title="Retour à la page d'accueil">
                <img src="./assets/img/logo.png" alt="Logo du site" />
            </a>
            
                <a href="#">
                    <i class="fa-solid fa-user" aria-hidden="true"></i>
                    Serveur mutualisé
                </a>
                

                <a href="#">
                    <i class="fa-solid fa-user" aria-hidden="true"></i>
                    Serveur Dédié
                </a>

                <a href="#">
                    <i class="fa-solid fa-user" aria-hidden="true"></i>
                    Service "Cloud
                </a>

                <a href="#">
                    <i class="fa-solid fa-user" aria-hidden="true"></i>
                    Contact
                </a> */}
            </nav>
        </header>
    )
}

export default Header;