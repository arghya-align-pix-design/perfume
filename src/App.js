import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Frontend/Home/Home';
import ProductPage from './components/Frontend/ProductPage/ProductPage';

function App() {
  return (
  <div >
      <Router>
      <Routes>
        {/* Root route for displaying all products */}
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </Router>


  {/*<Navbar/>
   <Banner/> 
   <ProductGrid/>
   * <ProductPage/> */}
   {/* <ProductCard/>
   <ProductCard/> 
   */}
  </div>
        
  );
}

export default App;
