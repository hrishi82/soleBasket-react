import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavBar, NavAside } from "./components";
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
  ProfilePage,
  Profile,
  Address,
  OrderHistory,
  CheckoutPage
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
    <div className="App relative">
      <NavBar />
      <NavAside />
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
          path="/checkoutpage"
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/singleproductpage/:productID"
          element={<SingleProductPage />}
        />
        <Route
          path="/profilepage"
          element={ <ProtectedRoute><ProfilePage /></ProtectedRoute>}
        >
          <Route path="profile" element={<Profile />}/>
          <Route path="address" element={<Address />}/>
          <Route path="orderhistory" element={<OrderHistory />}/>

        </Route>

        <Route path="*" element={<ErrorPage />} />
        <Route path="/mockman" element={<MockAPI />} />
      </Routes>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
