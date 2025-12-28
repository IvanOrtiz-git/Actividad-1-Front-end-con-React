import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Principal from "./views/Principal";
import BookDetails from "./views/BookDetails";
import Checkout from './views/Checkout';
import Header from './components/Header';
import Footer from './components/Footer';
import "./App.css";
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Principal />} />
          <Route path="/store/libro/:id" element={<BookDetails />} />
          <Route path="/store/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
