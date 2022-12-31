import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
