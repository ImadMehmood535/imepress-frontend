import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import Home from "../pages/Home";
import Sale from "../pages/Sale";
import ShopPage from "../pages/shop/Shop";
import Blog from "../pages/blog/Blogs";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import WishList from "../pages/WishList";
import Slug from "../pages/blog/Slug";
import SlugShop from "../pages/shop/SlugShop";
import Faq from "../pages/Faq";
import ForgotPassword from "../pages/Forgot-Password";
import TermsAndConditions from "../pages/TermsAndConditions";
import Contact from "../pages/Contact";
import Checkout from "../pages/Checkout";
import About from "../pages/About";
import ProtectedRoutes from "../components/ProtectedRoutes";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/sale",
        element: <Sale />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/shop/:slug",
        element: <SlugShop />,
      },

      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/blogs/:slug",
        element: <Slug />,
      },
      {
        path: "/log-in",
        element: <LogIn />,
      },
      {
        path: "/sign-up",
        element: <Register />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/teem-&-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        element: <ProtectedRoutes />,
        children: [{ path: "/checkout", element: <Checkout /> }],
      },
    ],
  },
]);

export { router };
