import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { SearchProvider } from "./context/search";
import { MovieProvider } from "./context/movie";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SearchProvider>
    <MovieProvider>
      <App />
    </MovieProvider>
  </SearchProvider>
);
