import { Routes, Route } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductPage />} />

      <Route path="/product/1-5-red" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
