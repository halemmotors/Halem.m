import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import BrandPage from './pages/BrandPage';
import ModelPage from './pages/ModelPage';
import Insurance from './pages/Insurance';
import Customization from './pages/Customization';
import ExtendedWarranty from './pages/ExtendedWarranty';
import Partners from './pages/Partners';
import News from './pages/News';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Payment from './pages/Payment';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/brands/:brandId" element={<BrandPage />} />
        <Route path="/models/:modelId" element={<ModelPage />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/customization" element={<Customization />} />
        <Route path="/extended-warranty" element={<ExtendedWarranty />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/news" element={<News />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
