import React from 'react';
import { Route } from "react-router";
import "./App.scss";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
      <>
          <Route exact path={"/"}>
              <HomePage />
          </Route>
          <Route exact path={"/admin"}>
              <AdminPage />
          </Route>
          <Route exact path={"/login"}>
              <LoginPage/>
          </Route>
      </>
  );
}

export default App;
