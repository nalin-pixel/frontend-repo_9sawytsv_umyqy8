import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Inventory from './components/Inventory';
import RequestForm from './components/RequestForm';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Inventory />
        <RequestForm />
      </main>
    </div>
  );
}

export default App;
