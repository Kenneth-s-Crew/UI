import * as React from "react";
import { Navigate } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../../Store";


export const Navbar: React.FC = () => {
  const navigate = useNavigate();

 // const dispatch: AppDispatch = useDispatch();
  


  return (
    <nav className="navbar">
      <div className="logo" title="img">
        {" "}
        <img
          src="https://cdn-icons-png.flaticon.com/512/566/566294.png"
          alt="tictactoe logo"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div className="header" title="header">
        AllMart
      </div>
      <div className="wrap">
       <button className="btn" title="login" >
          Login
        </button> 
      </div>
    </nav>
  );
};
