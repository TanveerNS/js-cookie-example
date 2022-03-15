import React from 'react'
import "./App.scss";
import './globalstyled/pages/common.scss'
import "./globalstyled/common/button/main.scss";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Outdoor from "./pages/Outdoor";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Champaign";
import About from './pages/common/About';
import TermCondition from './pages/common/TermCondition';
import PrivacyPolicy from './pages/common/PrivacyPolicy';
import Contact from './pages/common/Contact'
import Cart from "./pages/Cart/index";
import ItemDetails from "./pages/OutdoorSpecificItemDetails";
import Footer from "./components/common/Footer/Footer";
import Header from "./components/common/Header/Header";
import { PrivateRoute } from "./services/private_route/PrivateRoute";
import Alerts from './components/common/notification/Alert';
import {  useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function App() {
  const login = useSelector((state) => state.loginReducer.login);
  const dispatch = useDispatch();
  if(localStorage.getItem('token') === null){
    localStorage.removeItem('islogin')
    localStorage.removeItem('token')
    dispatch({ type: "logout" });
  } else if(localStorage.getItem('token').length === 0){
    localStorage.removeItem('islogin')
    localStorage.removeItem('token')
    dispatch({ type: "logout" });
  }
  // let localstorage = new LocalStorage();
  // useEffect(()=>{
  //   if(localstorage.loginStatus('islogin') === true){
  //     dispatch({ type: "login" });
  //   } else {
  //     dispatch({ type: "logout" });
  //   }
  // })
  
  return (
    <div className="App">
      <Alerts />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about-us" exact component={About} />
        <Route path="/term-and-condition" exact component={TermCondition} />
        <Route path="/privacy-policy" exact component={PrivacyPolicy} />
        <Route path="/contact-us" exact component={Contact} />
        <PrivateRoute exact path="/outdoor">
          <Outdoor />
        </PrivateRoute>
        <PrivateRoute exact path="/profile">
          <Profile />
        </PrivateRoute>
        <PrivateRoute exact path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute exact path="/dashboard/:slug">
          <Product />
        </PrivateRoute>
        <PrivateRoute exact path="/bag">
          <Cart />
        </PrivateRoute>
        <PrivateRoute exact path="/itemdetails">
          <ItemDetails />
        </PrivateRoute>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
