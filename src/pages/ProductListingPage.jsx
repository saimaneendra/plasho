import PlantCard from '../components/PlantCard';

const plants = [
  { id: '1', name: 'Aloe Vera', price: 10, image: '/assets/plants/aloe.jpg', category: 'Succulents' },
  { id: '2', name: 'Peace Lily', price: 15, image: '/assets/plants/peace.jpg', category: 'Flowering' },
  { id: '3', name: 'Spider Plant', price: 12, image: '/assets/plants/spider.jpg', category: 'Tropical' },
  { id: '4', name: 'Snake Plant', price: 14, image: '/assets/plants/snake.jpg', category: 'Succulents' },
  { id: '5', name: 'Orchid', price: 20, image: '/assets/plants/orchid.jpg', category: 'Flowering' },
  { id: '6', name: 'Palm', price: 18, image: '/assets/plants/palm.jpg', category: 'Tropical' },
];

export default function ProductListingPage() {
  const categories = ['Succulents', 'Flowering', 'Tropical'];
  return (
    <div className="p-6">
      {categories.map((category) => (
        <div key={category} className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plants.filter(p => p.category === category).map(plant => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
