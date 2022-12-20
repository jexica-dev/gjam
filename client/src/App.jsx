import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./screens/Home/Home";
import About from "./screens/About/About";
import JamDetail from "./screens/JamDetail/JamDetail";
import JamForm from "./screens/JamForm/JamForm";
import Jams from "./screens/Jams/Jams";
import SignOut from "./screens/SignOut/SignOut";
import Cart from "./screens/Cart/Cart";
import { verifyUser } from "./services/users";
import Login from "./screens/Login/Login";
import Dashboard from "./screens/Dashboard/Dashboard";

function App() {
  const [user, setUser] = useState(null);
  // const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      // const id = await getUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <Home user={user} />
      </Route>
      <Route exact path="/jams">
        <Jams user={user} />
      </Route>
      <Route exact path="/jams/new">
        {/* {user ? <JamForm user={user} /> : <Redirect to="/login" />} */}
        <JamForm user={user} />
      </Route>
      <Route exact path="/jams/:id">
        <JamDetail user={user} />
      </Route>
      <Route exact path="/jams/:id/edit">
        {user ? <JamForm user={user} /> : null}
      </Route>
      <Route path="/login">
        <Login user={user} setUser={setUser} />
      </Route>
      <Route path="/dashboard">
        {user ? <Dashboard user={user} /> : <Redirect to="/login" />}
      </Route>
      <Route path="/signout">
        <SignOut setUser={setUser} />
      </Route>
      <Route path="/about">
        <About user={user} />
      </Route>
      <Route path="/cart">
        {user ? <Cart user={user} /> : <Redirect to="/login" />}
      </Route>
    </Switch>
  );
}

export default App;
