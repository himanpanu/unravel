import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContext, AuthProvider } from "./AuthProvider";
import AboutBusiness from "./pages/AboutBusiness";
import AddBusiness from "./pages/AddBusiness";
import AllBusiness from "./pages/AllBusiness";
import Business from "./pages/Business";
import Categories from "./pages/Categories";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Overview from "./pages/Overview";
import Photos from "./pages/Photos";
import Register from "./pages/Register";
import Review from "./pages/Review";
import Reviews from "./pages/Reviews";


function App() {
  const { setUser, user } = useContext(AuthContext);
  return(
    <BrowserRouter>
    <AuthProvider>
    <Routes>
        <Route path="/">
          <Route index element={<Index/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/business" element={<Business/>}/>
          <Route path="/review" element={<Review/>}/>
          <Route path="/add-business" element={<AddBusiness/>}/>
          <Route path="/about-business/:id" element={<AboutBusiness/>}/>
          <Route path="/all-business/:name" element={<AllBusiness/>}/>
          <Route path="/user">
                <Route index element={<Overview/>}/>
                <Route path="photos" element={<Photos/>}/>
                <Route path="reviews" element={<Reviews/>}/>
                <Route path="categories" element={<Categories/>}/>
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
