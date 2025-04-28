import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header() {
  const totalCount = useSelector((state) => state.cart.totalCount);
  return (
    <header className="p-4 bg-green-700 text-white flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">Plant Shop</Link>
      <nav>
        <Link to="/products" className="mr-4">Products</Link>
        <Link to="/cart">Cart ({totalCount})</Link>
      </nav>
    </header>
  );
}