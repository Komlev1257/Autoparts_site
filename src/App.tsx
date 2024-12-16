import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contacts from './pages/contacts';
import Payment from './pages/Payment';
import Delivery from './pages/Delivery';
import Catalog from './pages/Catalog';
import StickyBar from "./components/sticky_bar/stickyBar";
import { Header } from './components/header/index';
import { Footer } from './components/footer/index';
import './global.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Header - общий верхний блок */}
        <Header />
        
        {/* StickyBar - всегда вверху */}
        <StickyBar />
        
        {/* Основной контент */}
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/catalog" element={<Catalog />} />
          </Routes>
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
