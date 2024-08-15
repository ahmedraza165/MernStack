
import { Route, BrowserRouter as Router } from "react-router-dom"
import { FooterWithSocialLinks } from "./components/Footer"
import { ComplexNavbar} from "./components/Header"
import HeaderNav from "./components/HeaderNav"
import Home from "./pages/Home"
import { Login } from "./LoginSignup/LoginForm"



function App() {

  return (
    <Router> 

    <Route path="/" exact component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/contact" component={Contact} />
  </Router>

   

  )
}

export default App
