import React, { useState } from "react";
import "../CSS/navbar.css";
import logo from "../Assets/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";
import { width } from "@mui/system";
import { searchbyvalue } from "../store/slice/userslice";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [change, setchanged] = useState(false);
  const data = useSelector((state) => {
    return state.users;
  });
  const [search, setsearch] = useState("");
  const searchthevalue = () => {
    if (search.length > 0) {
      dispatch(searchbyvalue(search));
      setsearch("");
    }
  };
  const navigation = () => {};
  return (
    <div className="navbar_container">
      <div className="navbar_secondcontainer">
        <div className="navbar_left_container">
          <div className="navbar_logo">
            A-z
            <img src={logo} alt="" height="50px" />
            Cartz
          </div>
        </div>
        <div className="navbar_right_navbar_container">
          <div className="navbar_search">
            <input
              type="search"
              name=""
              id=""
              value={search}
              placeholder="search"
              onChange={(e) => setsearch(e.target.value)}
            />
            <button
              className="navbar_search_button"
              onClick={() => searchthevalue()}
            >
              <SearchIcon sx={{ height: "20px" }} />
            </button>
          </div>
          <div className="navbar_home" onClick={() => navigate("/home")}>
            Home
          </div>
          <div className="navbar_home" onClick={() => navigate("/product")}>
            Products
          </div>
          <div
            className="navbar_cart"
            data-count={data.cart.length}
            onClick={() => navigate("/cart")}
          >
            <ShoppingCartOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
