import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useBasket } from '../basket/BasketContext';

// Customers land here after Tapp checkout.
export default function CheckoutReturn() {
  const [params] = useSearchParams();
  const { clear } = useBasket();
  const status = params.get('status');

  useEffect(() => {
    if (status === 'authorised') clear();
  }, [status]);

  if (status === 'authorised') {
    return (
      <div className="notice success">
        <h1>Payment successful!</h1>
        <p>Your order is being prepared.</p>
      </div>
    );
  }

  return (
    <div className="notice">
      <h1>Payment not completed</h1>
      <Link to="/basket" className="btn">Back to basket</Link>
    </div>
  );
}
