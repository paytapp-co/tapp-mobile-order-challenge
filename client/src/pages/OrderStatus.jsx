import { useParams } from 'react-router-dom';

export default function OrderStatus() {
  const { id } = useParams();

  // TODO
  return <p>Order {id}</p>;
}
