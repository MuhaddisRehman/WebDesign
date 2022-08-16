import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Contact from './pages/Contact';
import Sidebar from './components/Sidebar';
import Portfolio from './pages/Portfolio';
import About from './pages/About'
import Footer from './components/Footer';
function App() {
  return (
  <BrowserRouter>
    <Sidebar/>
    <Routes>
      
      <Route path='/Contact' exact element={ <Contact/>}/>  
      <Route path='/Portfolio' exact element={ <Portfolio/>}/>  
      <Route path='/About' exact element={ <About/>}/>  
    </Routes>
    <Footer/>

  </BrowserRouter>
  );
}

export default App;
