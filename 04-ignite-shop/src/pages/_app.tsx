import { globalStyles } from '../styles/global';
import Image from 'next/future/image';

import logoImg from '../assets/logo.svg';
import { Container, Header } from '../styles/pages/app';

globalStyles();

export default function App({ Component, pageProps }) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt='' />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
