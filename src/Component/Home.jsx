import React from "react";
import "../CSS/home.css";
import Navbar from "./Navbar";
import logo from "../Assets/logo.svg";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Footbar from "../Component/Footbar";
const Home = () => {
  return (
    <div className="home_container">
      <div className="home_navbar_container">
        <Navbar />
      </div>
      <div className="home_body">
        <div className="home_slider"></div>
        <div className="home_information">
          <div className="hove_left_container_information">
            <span className="home_intro">Welcome to</span>
          </div>
          <div className="hove_right_container_information">
            <img
              src="https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              height="300px"
              width="500px"
              className="home_img"
            />
          </div>
        </div>
        <div className="home_last_section">
          <div className="home_item_images1"></div>
          <div className="home_item_images2"></div>
          <div className="home_item_images3"></div>
          <div className="home_item_images4"></div>
          <button className="home_last_section_btn">
            <DoubleArrowIcon
              sx={{ color: "darkblue", height: "60px", width: "60px" }}
            />
          </button>
        </div>
      </div>
      <div className="home_footbar_container">
        <Footbar />
      </div>
    </div>
  );
};

export default Home;
