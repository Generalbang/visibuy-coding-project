import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProductDetails from "./components/product/ProductDetails";
import Header from "./components/header/Header";
import Search from "./components/search/Search";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
