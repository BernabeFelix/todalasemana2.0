import React from 'react';
import FooterLink from './FooterLink';
import { homeUrl, aboutUrl, servicesUrl, contactUrl } from '../../../routes';

const Footer = () => (
  <footer className="footer">
    <FooterLink url={homeUrl()} label="Home" />
    <FooterLink url={aboutUrl()} label="Quienes somos" />
    <FooterLink url={servicesUrl()} label="Servivios" />
    <FooterLink url={contactUrl()} label="Contacto" />
  </footer>
);

export default Footer;
