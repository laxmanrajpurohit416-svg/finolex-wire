import { Routes, Route } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductPage />} />

      <Route path="/product/1-5-red" element={<ProductPage />} />
      <Route path="/product/1-5-black" element={<ProductPage />} />
      <Route path="/product/1-5-yellow" element={<ProductPage />} />
      <Route path="/product/1-5-blue" element={<ProductPage />} />
      <Route path="/product/1-5-green" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
