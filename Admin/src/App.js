import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import "./App.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser;
  const user = useSelector((state)=>state.user.currentUser);
  
  
  return (
    <Router>
        <ToastContainer />
        <Switch>
         {<Route path="/login">{admin==null? <Login />: <Redirect to="/" /> }</Route>}
         {<Route path="/">{user!==null && admin!==null?           
           <><Topbar />
                <div className="container">
                  <Sidebar />
                  <Route exact path="/"><Home/></Route>
                  <Route path="/users"><UserList/></Route>
                  <Route path="/user/:userId"><User/></Route>
                  <Route path="/newUser"><NewUser/></Route>
                  <Route path="/products"><ProductList/></Route>
                  <Route path="/product/:productId"><Product/></Route>
                  <Route path="/newproduct"><NewProduct/></Route>
                </div>
                </>
                : <Redirect to="/login" />}</Route>}

        </Switch>
    </Router>
  );
}

export default App;
