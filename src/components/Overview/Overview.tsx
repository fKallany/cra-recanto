/**
 * @copyright 2024 Fabio Kallany Silva Santos. Todos os direitos reservados.
 * @license MIT
 */
import { Container } from './Overview.styles';

const Banner = () => {

  return (
    <Container>
      <div className="c-overview">
        <div className="c-overview__titles">
          <h4>Recanto da Vida - Sorocaba</h4>
          <h5>Pousada para idosos</h5>
        </div>
        <div className="c-overview__texts">
          <p>O Recanto da Vida é uma casa de repouso com mais de duas décadas de experiência, dedicada a cuidar e trazer felicidade aos seus moradores desde o início.</p>
          <p>Nossa instituição conta com equipes bem organizadas, dedicadas e responsáveis, treinadas para oferecer assistência com carinho e sensibilidade aos idosos.</p>
          <p>Nossos profissionais estão sempre atentos às necessidades individuais de cada residente, garantindo um atendimento personalizado e humanizado. Promovemos atividades recreativas e terapêuticas que estimulam a socialização e o bem-estar, proporcionando um ambiente acolhedor e seguro para todos.</p>
        </div>
        <div className="c-overview__years">
          <div className="c-overview__years__number">20+</div>
          <div className="c-overview__years__title">Anos de experiência</div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;