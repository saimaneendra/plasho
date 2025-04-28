import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: 'url(/assets/landing-bg.jpg)' }}
    >
      <h1 className="text-5xl font-bold mb-4">Welcome to Plant Shop</h1>
      <p className="text-lg max-w-md text-center">We provide unique houseplants to liven up your home. Discover our fresh collection of indoor greens!</p>
      <Link to="/products">
        <button className="mt-6 px-4 py-2 bg-green-600 hover:bg-green-800 rounded">Get Started</button>
      </Link>
    </div>
  );
}
