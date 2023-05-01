import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../routes/Home";
import About from "../routes/About";
import Products from "../routes/Products";
import ProductPage from "../routes/ProductPage";
import Dashboard, { loader as loginLoader } from "../routes/Dashboard";
import AddProduct, { loader as addLoader } from "../routes/AddProduct";
import DeleteProduct, { loader as deleteLoader } from "../routes/DeleteProduct";
import UpdateProducts, {
  loader as updateLoaderOne,
} from "../routes/UpdateProducts";
import UpdateProduct, { loader as updateLoader } from "../routes/UpdateProduct";
import Login, { loader as loggedinLoader } from "../routes/Login";
import Register from "../routes/Register";
import Layout from "./Layout";
import { getProducts } from "../api/api";
import { loader as productLoader } from "../routes/ProductPage";
import Error from "./Error";
import Edit, { loader as editLoader } from "../routes/Edit";
import Checkout from "../routes/Checkout";

function productsLoader() {
  return getProducts();
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} loader={productsLoader} />
      <Route path="about" element={<About />} />
      <Route path="products" element={<Products />} loader={productsLoader} />
      <Route
        path="products/:id"
        element={<ProductPage />}
        loader={({ params }) => {
          return productLoader(params.id);
        }}
      />
      <Route path="dashboard" element={<Dashboard />} loader={loginLoader} />
      <Route
        path="add"
        element={<AddProduct />}
        loader={addLoader}
        errorElement={<h2>Forbidden</h2>}
      />
      <Route path="delete" element={<DeleteProduct />} loader={deleteLoader} />
      <Route
        path="update"
        element={<UpdateProducts />}
        loader={updateLoaderOne}
      />
      <Route
        path="update/:id"
        element={<UpdateProduct />}
        loader={({ params }) => {
          return updateLoader(params.id);
        }}
      />
      <Route path="login" element={<Login />} loader={loggedinLoader} />
      <Route path="register" element={<Register />} />
      <Route path="edit" element={<Edit />} loader={editLoader} />
      <Route path="checkout" element={<Checkout />} loader={productsLoader} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
