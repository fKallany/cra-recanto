/**
 * @copyright 2024 Fabio Kallany Silva Santos. Todos os direitos reservados.
 * @license MIT
 */
import { Container } from './Banner.styles';
import banner from '/assets/img/recanto-banner.jpg';

const Banner = () => {

  return (
    <Container>
      <div className="c-banner">
        <img className="c-banner__background-image" src={banner} alt="Uma enfermeira e uma idosa caminhando no quintal do recanto." />
        <div className="c-banner__texts">
          <div className="c-banner__texts__text">
            <h1 className="c-banner__texts__text__title">Tão moderno quanto envelhecer!</h1>
            <p className="c-banner__texts__text__description">Com segurança, assistência e uma equipe capacitada pronta para atender!</p>
            <a className="c-banner__texts__text__button" href="https://www.instagram.com/recanto_da_vida_sorocaba/" target='_blank' rel="noreferrer">Contato</a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;