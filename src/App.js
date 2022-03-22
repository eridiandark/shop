import React from 'react';
import { Route } from "react-router";
import "./App.scss";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
      <>
          <Route exact path={"/"}>
              <HomePage />
          </Route>
          <Route exact path={"/admin"}>
              <AdminPage />
          </Route>
      </>
  );
}

export default App;
