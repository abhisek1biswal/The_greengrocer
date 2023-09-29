import logo from './logo.svg';
import './App.css';
import Navigation from './Customer/components/Navigation/Navigation.jsx';
import Homepage from './Customer/pages/homepage/Homepage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './Customer/components/footer/Footer';
import CatagoriesPage from './Customer/pages/Catagories/CatagoriesPage';
import SellerPage from './Customer/pages/SellerPage/SellerPage';
import Cartpage from './Customer/pages/cart/Cartpage';
import App1 from './App1'
import Profile from './Customer/pages/accountPage/Profile';
import Success from './Customer/pages/Success/Success';
import Orderpage from './Customer/pages/myOrders/Orderpage';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" exact element={<Homepage />}/>
        <Route path="/catagories" element={<CatagoriesPage/>}/>
        <Route path="/seller" element={<SellerPage/>}/>
        <Route path="/mycart" element={<Cartpage/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/placeorder' element={<App1/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/orders' element={<Orderpage/>}/>
      </Routes>
      <div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
