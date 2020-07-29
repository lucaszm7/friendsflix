import React from 'react';
import { FooterBase } from './styles';
import footImage from '../../assets/img/footImage.png'

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src={footImage} alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante um
        {' '}
        <a href="https://www.instagram.com/lukedazm/">
          surto psicótico
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
