import { useRouter } from '../../../node_modules/next/router';

export default function Product() {
  const { query } = useRouter();

  return (
    <>
      <h1>Product: {JSON.stringify(query)}</h1>
    </>
  );
}
