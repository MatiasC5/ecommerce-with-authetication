import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import NavBar from "./components/NavBar";
import { RegisterPage } from "./pages/RegisterPage";
import { CartPage } from "./pages/CartPage";
import { ProtectedRoutes } from "./ProtectedRoutes";
import CartProvider from "./context/CartContext/CartContext";
import { AuthProvider } from "./context/AuthContext/AuthContext";
import { ProductsProvider } from "./context/ProductsContext/ProductsContext";
import { FiltersProvider } from "./context/FiltersContext/FiltersContext";

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
