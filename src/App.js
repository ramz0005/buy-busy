import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import { AuthProvider } from './AuthContext';
import Home from './Components/Home/Home';
import { ProductProvider } from './ProductContext';
import Cart from './Components/Cart/Cart';
import Orders from './Components/Orders/Orders';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },
        { path: "/signin", element: <SignIn /> },
        { path: "/signup", element: <SignUp /> },
        { path: "/cart", element: <Cart />},
        { path: "/myOrders", element: <Orders />}
      ]
    }
  ])

  return (
    <>
      <AuthProvider>
        <ProductProvider>
          <RouterProvider router={router} />
        </ProductProvider>
      </AuthProvider>
    </>
  );
}

export default App;
