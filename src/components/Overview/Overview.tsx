import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Container } from './Overview.styles';

const Banner = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [number, setNumber] = useState(0);
  const [start, setStart] = useState(false);
  const endNumber = 20;
  const duration = 1200;
  const delay = 200;

  useEffect(() => {
    if (inView && !start) {
      setStart(true);
      setTimeout(() => {
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = timestamp - startTimestamp;
          const currentNumber = Math.min(Math.floor((progress / duration) * endNumber), endNumber);
          setNumber(currentNumber);
          if (progress < duration) {
            requestAnimationFrame(step);
          }
        };
        requestAnimationFrame(step);
      }, delay);
    }
  }, [inView, start]);

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
        <div className="c-overview__years" ref={ref}>
          <div className="c-overview__years__number">{number}+</div>
          <div className="c-overview__years__title">Anos de experiência</div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
