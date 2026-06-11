import { Routes, Route } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import ProductPage1sqmm from "./Pages/ProductPage1sqmm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductPage />} />

      <Route path="/product/1-5-red" element={<ProductPage />} />
      <Route path="/product/1-5-black" element={<ProductPage />} />
      <Route path="/product/1-5-yellow" element={<ProductPage />} />
      <Route path="/product/1-5-blue" element={<ProductPage />} />
      <Route path="/product/1-5-green" element={<ProductPage />} />
      <Route path="/product/1-0-red" element={<ProductPage1sqmm />} />
    </Routes>
  );
}

export default App;
