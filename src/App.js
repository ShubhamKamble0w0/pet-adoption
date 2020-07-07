import React from "react";
import { Router, Link } from "@reach/router";
import Details from "./Details";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};
export default App;
