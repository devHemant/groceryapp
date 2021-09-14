import "./App.css";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/product" component={ProductPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
    </Router>
  );
}

export default App;
