import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import WishList from './Components/WishList/WishList';
import Electronics from './Components/ProductCard/Electronics';
import Jewelery from './Components/ProductCard/Jewelery';
import MensClothing from './Components/ProductCard/MensClothing';
import WomensClothing from './Components/ProductCard/WomensClothing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/login' element={<Login />} ></Route>
          <Route path='/signup' element={<SignUp />} ></Route>
          <Route path='/wishlist' element={<WishList/>} ></Route>
          <Route path='/electronics' element={<Electronics/>} ></Route>
          <Route path='/jewelery' element={<Jewelery/>} ></Route>
          <Route path='/mensclothing' element={<MensClothing/>} ></Route>
          <Route path='/womensclothing' element={<WomensClothing/>} ></Route>

        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
