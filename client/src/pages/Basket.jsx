import { Link, useNavigate } from 'react-router-dom';
import { useBasket } from '../basket/BasketContext';
import { formatPrice } from '../money';

export default function Basket() {
  const { lines, total, increment, decrement } = useBasket();
  const navigate = useNavigate();

  const checkout = async () => {
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: lines, total }),
    });
    const { order } = await res.json();

    // TODO: send the customer to Tapp checkout
    navigate(`/orders/${order.id}`);
  };

  if (lines.length === 0) {
    return (
      <div className="empty">
        <p>Your basket is empty.</p>
        <Link to="/" className="btn">Browse the menu</Link>
      </div>
    );
  }

  return (
    <>
      <h1>Your basket</h1>
      <ul className="basket-list">
        {lines.map((line) => (
          <li key={line.itemId} className="basket-line">
            <div>
              <h3>{line.name}</h3>
              {line.modifiers.length > 0 && (
                <p className="muted">{line.modifiers.map((m) => m.name).join(', ')}</p>
              )}
              <p className="price">{formatPrice(line.price * line.quantity)}</p>
            </div>
            <div className="qty">
              <button onClick={() => decrement(line.itemId)} aria-label={`Remove one ${line.name}`}>−</button>
              <span>{line.quantity}</span>
              <button onClick={() => increment(line.itemId)} aria-label={`Add one ${line.name}`}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="basket-total">
        <span>Total</span>
        <strong>{formatPrice(total)}</strong>
      </div>
      <button className="btn btn-pay" onClick={checkout}>
        Pay {formatPrice(total)}
      </button>
    </>
  );
}
