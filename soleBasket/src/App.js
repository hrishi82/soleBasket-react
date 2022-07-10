import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components";
import {
  HomePage,
  ProductPage,
  LoginPage,
  LogoutPage,
  SignupPage,
  CartPage,
  WishlistPage,
  SingleProductPage,
  ErrorPage,
} from "./pages";
import { ProtectedRoute } from "./Routes/ProtectedRoute";
// import { ToastContainer } from "react-toastify";

import Mockman from "mockman-js";
function MockAPI() {
  return (
    <div className="MockAPI">
      <Mockman />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/logoutpage" element={<LogoutPage />} />
        <Route path="/signuppage" element={<SignupPage />} />
        <Route
          path="/cartpage"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wishlistpage"
          element={
            <ProtectedRoute>
              <WishlistPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/singleproductpage/:productID"
          element={<SingleProductPage />}
        />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/mockman" element={<MockAPI />} />
      </Routes>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
