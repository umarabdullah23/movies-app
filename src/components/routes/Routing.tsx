import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import MovieDetails from "../home/movie-row/movie/movie_details/MovieDetails";
import Login from "../login-signup/Login";
import Register from "../login-signup/Register";

function Routing() {
  return (
    <div className="RoutesComponent">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details/:movieId" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;