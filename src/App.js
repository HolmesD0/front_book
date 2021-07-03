import Header from "./components/Header/Header";
import Header2 from "./components/HeaderForRegistred/Header2";
import Login from "./components/Login/Login";
import Book from "./components/Admin/Book";
import User from "./components/Admin/User";
import Enable from "./components/Enable/Enable";
import Test from "./components/Admin/Profil";
import Search from "./components/Search/Search";
import Home from "./components/Home/Home";
import Cart from "./components/Home/Cart";
import Dash from "./components/Home/Dash";
import Signup from "./components/Signup/Signup";
import Profil from "./components/Profil/Profil";
import AddBook from "./components/AddBook/AddBook";
import UpdateBook from "./components/AddBook/UpdateBook";
import BookInfo from "./components/BookInfo/BookInfo";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const admin = user ? user.result.isAdmin : false;

  return (
    <Router>
      <div className="App">
        {user ? <Header2 /> : <Header />}
        <Switch>
          {!user && (
            <Route path="/login">
              <Login />
            </Route>
          )}
          {!user && (
            <Route path="/Signup">
              <Signup />
            </Route>
          )}
          <Route path="/Search/:id">
            <Search />
          </Route>
          <Route path="/articles/:id">
            <BookInfo />
          </Route>
          {user && (
            <Route path="/addBook">
              <AddBook />
            </Route>
          )}
          {user && (
            <Route path="/cart">
              <Cart />
            </Route>
          )}
          {user && (
            <Route path="/dash">
              <Dash />
            </Route>
          )}
          {user && <Route path="/update/:id" component={UpdateBook}></Route>}
          {user && (
            <Route path="/profil">
              <Profil />
            </Route>
          )}
          {admin && (
            <Route path="/admin/book">
              <Book />
            </Route>
          )}
          {admin && (
            <Route path="/admin/user">
              <User />
            </Route>
          )}
          {admin && (
            <Route path="/user/:id">
              <Test />
            </Route>
          )}
          <Route path="/enable/:id">
            <Enable />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
