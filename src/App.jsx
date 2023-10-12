import { Outlet } from 'react-router-dom';
import Nav from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <main className="text-3xl font-bold underline">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
