import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './pages/Nav';
import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Men from './pages/Men';
// import Women from './pages/Women';
// import Collections from './pages/Collections';
import { CartContextProvider } from './CartContext';

function App() {
  return (
    <CartContextProvider>
      <div className="container">
        <Nav />
        <BrowserRouter basename="ecommerce-products-page">
          <Routes>
            <Route path="/" element={<Home />} />{' '}
          </Routes>{' '}
        </BrowserRouter>
      </div>{' '}
    </CartContextProvider>
  );
}

export default App;
