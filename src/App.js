import './app.css';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Nav from './pages/Nav';
import Home from './pages/Home';
import { CartContextProvider } from './CartContext';

function App() {
  return (
    <CartContextProvider>
      <HashRouter>
        <div className="container">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />{' '}
          </Routes>{' '}
        </div>{' '}
      </HashRouter>{' '}
    </CartContextProvider>
  );
}

export default App;
