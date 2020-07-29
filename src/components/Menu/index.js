import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
//import ButtonLink from './ButtonLink';
import Button from '../Button'

function Menu() 
{
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo}/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>

        </nav>
    );
}

export default Menu; // Exporta a function Menu