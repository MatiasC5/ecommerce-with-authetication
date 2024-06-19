import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import NavBar from "./components/NavBar";
import { ProductsProvider } from "./context/ProductsContext";
import { FiltersProvider } from "./context/FiltersContext";
import { RegisterPage } from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <ProductsProvider>
        <FiltersProvider>
          <BrowserRouter>
            <main className="container mx-auto px-10">
              <NavBar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </main>
          </BrowserRouter>
        </FiltersProvider>
      </ProductsProvider>
    </AuthProvider>
  );
}

export default App;
