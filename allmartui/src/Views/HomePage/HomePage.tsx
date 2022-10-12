import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//import { AppDispatch, RootState } from "../../Store";

import { Navbar } from "../../Components/Navbar/Navbar";


//import "./HomePage.css";
import { useNavigate } from "react-router-dom";


export const HomePage: React.FC = () => {


  //const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
  
  }, []);

 
  return (
    <>
      <Navbar />
     
    </>
  );
};
