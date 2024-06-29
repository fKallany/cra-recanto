/**
 * @copyright 2024 Fabio Kallany Silva Santos. Todos os direitos reservados.
 * @license MIT
 */
import { Container } from './Home.styles';
import Banner from '/components/Banner';
import Overview from '/components/Overview';

export default function Home() {
  return (
    <Container>
      <Banner />
      <Overview />
    </Container>
  );
}
