import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

export default function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  return (
    <div className="border rounded p-4 shadow-md">
      <img src={plant.image} alt={plant.name} className="w-full h-32 object-cover mb-2" />
      <h2 className="font-bold">{plant.name}</h2>
      <p>${plant.price}</p>
      <button
        onClick={() => dispatch(addToCart(plant))}
        disabled={!!items[plant.id]}
        className="mt-2 bg-green-500 text-white p-1 rounded disabled:bg-gray-400"
      >
        {items[plant.id] ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
}