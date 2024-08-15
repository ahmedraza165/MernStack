import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from './pages/Home.jsx'

import { Login } from './LoginSignup/LoginForm.jsx'
import { SignUp } from './LoginSignup/SignupForm.jsx'
import Shop from './pages/Shop.jsx'
import Cart from './pages/Cart.jsx'
import AddToCart from './components/AddToCart.jsx';
import HeaderNav from './components/HeaderNav.jsx';
import AddProduct from './pages/AddProduct.jsx';
import Contact from './pages/Contact.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home />
  },
  {
    path:'/login',
    element:<Login />
  },
  {
    path:'/signUp',
    element:<SignUp />
  },
  {
    path:'/shop',
    element:<Shop />
  },
  {
    path:'/cart',
    element:<Cart />
  },
  {
    path:'/AddtoCart',
    element:<AddToCart />
  },
  {
    path:'/AddProduct',
    element:<AddProduct />
  },
  {
    path:'/Contact',
    element:<Contact />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />

  </React.StrictMode>,
)
