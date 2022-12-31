import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Contact from './pages/contact/Contact';
import Cart from './pages/cart/Cart';
import Login from './pages/auth/Login';
import Reset from './pages/auth/Reset';
import Register from './pages/auth/Register';

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/reset' element={<Reset />} />
          <Route path='/register' element={<Register />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
