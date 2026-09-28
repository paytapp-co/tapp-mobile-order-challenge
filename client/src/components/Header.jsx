import { Link } from 'react-router-dom';
import { useBasket } from '../basket/BasketContext';

export default function Header() {
  const { count } = useBasket();

  return (
    <header className="header">
      <Link to="/" className="brand">Tapp <span>Mobile Order</span></Link>
      <Link to="/basket" className="basket-link">
        Basket{count > 0 && <span className="badge">{count}</span>}
      </Link>
    </header>
  );
}
