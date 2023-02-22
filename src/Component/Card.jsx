import React, { useState } from "react";
import "../CSS/card.css";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { useDispatch, useSelector } from "react-redux";
import { setItemToCart } from "../store/slice/userslice";
import { useNavigate } from "react-router-dom";
const Card = ({ name, cost, imgsrc, rating, id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const setitemtocart = (val) => {
    dispatch(setItemToCart(val));
  };
  const [val, setval] = useState(rating);
  return (
    <div
      className="card_container"
      onClick={(e) => {
        navigate(e.target.tagName != "BUTTON" ? "/singleproduct" : "", {
          state: { val: id },
        });
      }}
    >
      <div className="item_img">
        <img src={imgsrc} alt="" height="100px" width="150px" />
      </div>
      <div className="item_secondcard_container">
        <div className="item_name">Name : {name}</div>
        <div className="item_cost">Cost : {cost}₹</div>
        <div className="item_star">
          {Array.from({ length: 5 }, (elem, index) => {
            var number = index + 0.5;
            return (
              <div>
                {val >= index + 1 ? (
                  <StarIcon sx={{ color: "gold" }} />
                ) : val >= number ? (
                  <StarHalfIcon sx={{ color: "gold" }} />
                ) : (
                  <StarBorderIcon sx={{ color: "gold" }} />
                )}
              </div>
            );
          })}
        </div>
        <div className="card_add_to_cart">
          <button onClick={() => setitemtocart(id)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
