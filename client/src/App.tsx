import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { CartPage } from "./pages/CartPage";
import { ProtectedRoutes } from "./ProtectedRoutes";
import CartProvider from "./context/CartContext/CartContext";
import { AuthProvider } from "./context/AuthContext/AuthContext";
import { ProductsProvider } from "./context/ProductsContext/ProductsContext";
import { FiltersProvider } from "./context/FiltersContext/FiltersContext";
import { ElectronicsPage } from "./pages/ElectronicsPage";
import { MensClothingPage } from "./pages/MensClothingPage";
import { JeweleryPage } from "./pages/JeweleryPage";
import { WomensClothingPage } from "./pages/WomensClothingPage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>
          <FiltersProvider>
            <BrowserRouter>
              <main className=" mx-auto  flex flex-col items-center">
                <NavBar />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/electronics" element={<ElectronicsPage />} />
                  <Route path="/jewelery" element={<JeweleryPage />} />
                  <Route
                    path="/men's clothing"
                    element={<MensClothingPage />}
                  />
                  <Route
                    path="/women's clothing"
                    element={<WomensClothingPage />}
                  />
                  <Route element={<ProtectedRoutes />}>
                    <Route path="/cart" element={<CartPage />} />
                  </Route>
                </Routes>
              </main>
            </BrowserRouter>
          </FiltersProvider>
        </CartProvider>
      </ProductsProvider>
    </AuthProvider>
  );
}

export default App;
