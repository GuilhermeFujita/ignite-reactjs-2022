import { styled } from '../styles';

const Button = styled('button', {
  background: '$rocketseat',
  borderRadius: 8,
});

export default function Home() {
  return (
    <>
      <Button>Hello World</Button>
    </>
  );
}
