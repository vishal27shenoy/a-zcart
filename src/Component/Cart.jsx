import React, { useState } from "react";
import "../CSS/cart.css";
import Navbar from "./Navbar";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { useDispatch, useSelector } from "react-redux";
const Cart = () => {
  const data = useSelector((state) => {
    return state.users;
  });
  console.log(data);
  const [arr, setarr] = useState(data.cart);
  return (
    <div className="cart_container">
      <div className="cart_navbar_container">
        <Navbar />
      </div>
      <div className="container_for_item_of_cart">
        <div className="display_item_of_cart">
          {arr &&
            arr.map((item, index) => {
              return (
                <div className="item_cart">
                  <div className="item_cartt_left_card">
                    <img
                      src={item.imgsrc1}
                      alt=""
                      height="150px"
                      width="150px"
                    />
                  </div>
                  <div className="item_cart_right">
                    <div>Name : {item.name}</div>
                    <div>Cost : {item.cost}</div>
                    <div>Availability : {item.availability ? "Yes" : "No"}</div>
                    <div>Type : {item.category}</div>
                    <div>Description : {item.description}</div>
                    <div className="Rating_container">
                      Rating :
                      {Array.from({ length: 5 }, (elem, index) => {
                        var number = index + 0.5;
                        return (
                          <div className="ratings">
                            {item.rating >= index + 1 ? (
                              <StarIcon sx={{ color: "gold" }} />
                            ) : item.rating >= number ? (
                              <StarHalfIcon sx={{ color: "gold" }} />
                            ) : (
                              <StarBorderIcon sx={{ color: "gold" }} />
                            )}
                          </div>
                        );
                      })}
                    </div>
                    <div className="order_button">
                      <button>Order </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
