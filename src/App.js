import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';
import AddPage from './Pages/AddPage';
import Basket from './Pages/Basket';
import Detail from './Pages/Detail';
import Wishlist from './Pages/Wishlist';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout></MainLayout>}>
          <Route path="/" element={<Home></Home>} />
          <Route path="/add" element={<AddPage></AddPage>} />
          <Route path="/basket" element={<Basket></Basket>} />
          <Route path="/detail/:id" element={<Detail></Detail>} />
          <Route path="/wishlist" element={<Wishlist></Wishlist>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
