import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Inventory from './components/Inventory';
import RequestForm from './components/RequestForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Inventory />
        <RequestForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
