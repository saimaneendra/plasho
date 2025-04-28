import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, remove } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const { items, totalCount, totalCost } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Your Shopping Cart</h2>
      <p>Total Plants: {totalCount}</p>
      <p>Total Cost: ${totalCost}</p>
      <div className="mt-6 grid gap-4">
        {Object.values(items).map(({ plant, quantity }) => (
          <div key={plant.id} className="flex items-center border p-4 justify-between">
            <img src={plant.image} alt={plant.name} className="w-20 h-20 object-cover" />
            <div>
              <h3>{plant.name}</h3>
              <p>Unit Price: ${plant.price}</p>
              <p>Quantity: {quantity}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => dispatch(increment(plant.id))} className="bg-green-500 px-2">+</button>
              <button onClick={() => dispatch(decrement(plant.id))} className="bg-yellow-500 px-2">-</button>
              <button onClick={() => dispatch(remove(plant.id))} className="bg-red-500 px-2">Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <button className="mr-4 bg-blue-600 text-white px-4 py-2 rounded" onClick={() => alert('Coming Soon!')}>Checkout</button>
        <Link to="/products">
          <button className="bg-gray-600 text-white px-4 py-2 rounded">Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
}