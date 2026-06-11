import { Routes, Route } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import ProductPage1sqmm from "./Pages/ProductPage1sqmm";
import ProductPage2_5sqmm from "./Pages/ProductPage2_5sqmm";

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
      <Route path="/product/1-0-black" element={<ProductPage1sqmm />} />
      <Route path="/product/1-0-yellow" element={<ProductPage1sqmm />} />
      <Route path="/product/1-0-blue" element={<ProductPage1sqmm />} />
      <Route path="/product/1-0-green" element={<ProductPage1sqmm />} />
      <Route path="/product/2-5-red" element={<ProductPage2_5sqmm />} />
      <Route path="/product/2-5-black" element={<ProductPage2_5sqmm />} />
      <Route path="/product/2-5-yellow" element={<ProductPage2_5sqmm />} />
      <Route path="/product/2-5-blue" element={<ProductPage2_5sqmm />} />
    </Routes>
  );
}

export default App;
