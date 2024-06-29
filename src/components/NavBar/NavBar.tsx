/**
 * @copyright 2024 Fabio Kallany Silva Santos. Todos os direitos reservados.
 * @license MIT
 */
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { Container } from './NavBar.styles';
import logo from '/assets/img/recanto-da-vida-logo.png';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container className={isScrolled ? 'background-scrolled' : ''}>
      <div className="c-nav">
        <div className="c-nav__images">
          <img
            className="c-nav__images__image"
            src={logo}
            alt="Logo recanto da vida Sorocaba"
          />
        </div>
        <div className="c-nav__items">
          <Link
            to="/"
            className={`c-nav__items__item ${currentPath === '/' ? 'active' : ''}`}
          >
            Início
          </Link>
          <Link
            to="/quem-somos"
            className={`c-nav__items__item ${currentPath === '/quem-somos' ? 'active' : ''}`}
          >
            Quem Somos
          </Link>
          <Link
            to="/estrutura"
            className={`c-nav__items__item ${currentPath === '/estrutura' ? 'active' : ''}`}
          >
            Estrutura
          </Link>
          <Link
            to="/nosso-dia-a-dia"
            className={`c-nav__items__item ${currentPath === '/nosso-dia-a-dia' ? 'active' : ''}`}
          >
            Nosso dia a dia
          </Link>
          <Link
            to="/servicos"
            className={`c-nav__items__item ${currentPath === '/servicos' ? 'active' : ''}`}
          >
            Serviços
          </Link>
          <Link
            to="/contatos"
            className={`c-nav__items__item ${currentPath === '/contatos' ? 'active' : ''}`}
          >
            Contatos
          </Link>
        </div>
        <div className="c-nav__socials">
          <a href='https://www.instagram.com/recanto_da_vida_sorocaba/' target='_blank' rel="noreferrer">
            <FontAwesomeIcon className='c-nav__socials__social' icon={faInstagram} />
          </a>
          <a href='https://pt-pt.facebook.com/Recantodavidasorocaba/' target='_blank' rel="noreferrer">
            <FontAwesomeIcon className='c-nav__socials__social' icon={faFacebookSquare} />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default NavBar;