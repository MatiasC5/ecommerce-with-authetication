import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import NavBar from "./components/NavBar";
import { ProductsProvider } from "./context/ProductsContext";
import { FiltersProvider } from "./context/FiltersContext";
import { RegisterPage } from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";
import { CartPage } from "./pages/CartPage";
import { ProtectedRoutes } from "./ProtectedRoutes";

function App() {
  return (
    <AuthProvider>
      <ProductsProvider>
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
      </ProductsProvider>
    </AuthProvider>
  );
}

export default App;
