import './Footer.css';
import { footerText } from '../../content/text';

import logo from '../../assets/images/prontus - white no bg.png';
import emailIcon from '../../assets/icons/e-mail.png';
import whatsappIcon from '../../assets/icons/whatsapp.png';
import instagramIcon from '../../assets/icons/instagram.png';
import mapIcon from '../../assets/icons/mapa.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__content">

        {/* Logo */}
        <img
          src={logo}
          alt="Prontus RH"
          className="footer__logo"
        />

        {/* Frase institucional */}
        <p className="footer__tagline">
          {footerText.tagline}
        </p>

        {/* Contatos */}
        <div className="footer__contacts">

          <a
            href="mailto:prontus.adm@gmail.com"
            className="footer__contact"
          >
            <img src={emailIcon} alt="" />
            <span>prontus.adm@gmail.com</span>
          </a>

          <a
            href="https://wa.me/5584996644000"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__contact"
          >
            <img src={whatsappIcon} alt="" />
            <span>(84) 99664-4000</span>
          </a>

          <a
            href="https://www.instagram.com/prontusrh"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__contact"
          >
            <img src={instagramIcon} alt="" />
            <span>@prontusrh</span>
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=R.+Teot%C3%B4nio+de+Carvalho%2C+1050+-+Tirol%2C+Natal+-+RN%2C+59015-100"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__contact"
          >
            <img src={mapIcon} alt="" />
            <span>
              R. Teotônio de Carvalho, 1050 – Tirol, Natal – RN, 59015-100
            </span>
          </a>

        </div>

        <span className="footer__copyright">
          {footerText.copyright}
        </span>

      </div>
    </footer>
  );
}
