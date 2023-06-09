import React from 'react';

import "../../Assets/css/index.css";
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

            </nav>
        </header>
    );
}

export default Header;