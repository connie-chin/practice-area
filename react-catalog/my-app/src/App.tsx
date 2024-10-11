import { Header } from './component/Header';
import { ClothingCatalog } from './pages/ClothingCatalog';
import { HomeGoodsCatalog } from './pages/HomeGoodsCatalog';
import { ClothingProductDetails } from './pages/ClothingProductDetails';
import { HomeGoodProductDetail } from './pages/HomeGoodProductDetail';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<ClothingCatalog />} />{' '}
        <Route path="homeGoods" element={<HomeGoodsCatalog />} />
        <Route
          path="homeGoods/homeGoodDetails/:productId"
          element={<HomeGoodProductDetail />}
        />
        <Route
          path="clothingDetails/:productId"
          element={<ClothingProductDetails />}
        />
      </Route>
    </Routes>
  );
}

export default App;
