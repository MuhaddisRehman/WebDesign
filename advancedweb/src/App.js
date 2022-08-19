
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
// import Header from './components/Header';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import Settings from './pages/Settings';
import POS from './pages/POS';
import Orders from './pages/Orders';
import Products from './pages/Products';

function App() {
  return (
    <BrowserRouter>
      <Sidebar/>
      <Routes>
      
        <Route path="/" element={<Home/>} />
        <Route path="/Products" element={<Products/>} />
        <Route path="/Orders" element={<Orders/>} />
        <Route path="/POS" element={<POS/>} />
        <Route path="/Settings" element={<Settings/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
