import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Menu from './pages/Menu';
import Basket from './pages/Basket';
import CheckoutReturn from './pages/CheckoutReturn';
import OrderStatus from './pages/OrderStatus';

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/checkout/return" element={<CheckoutReturn />} />
          <Route path="/orders/:id" element={<OrderStatus />} />
        </Routes>
      </main>
    </>
  );
}
