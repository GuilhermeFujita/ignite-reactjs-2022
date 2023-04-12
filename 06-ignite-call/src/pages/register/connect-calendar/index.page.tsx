import { Button, Heading, MultiStep, Text } from '@ignite-ui/react';
import { Container, Header } from '../styles';
import { ConnectBox, ConnectItem } from './styles';
import { ArrowRight } from 'phosphor-react';
import { signIn, useSession } from 'next-auth/react';

export default function ConnectCalendar() {
  const session = useSession();

  return (
    <Container>
      <Header>
        <Heading as='strong'>Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          <Button
            variant='secondary'
            size='sm'
            onClick={() => signIn('google')}
          >
            Conectar
            <ArrowRight />
          </Button>
        </ConnectItem>

        <Text>{JSON.stringify(session.data, null, 2)}</Text>

        <Button type='submit'>
          Próximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  );
}
