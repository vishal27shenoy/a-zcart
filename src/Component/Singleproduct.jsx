import React, { useEffect, useState } from "react";
import "../CSS/singleproduct.css";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { useLocation } from "react-router-dom";
const Singleproduct = () => {
  const location = useLocation();
  const data = useSelector((state) => {
    return state.users;
  });
  const [obj, setobj] = useState(
    Object.values(data.data).flat(1)[location.state.val]
  );
  //   setobj(obj[location.state.val]);
  const [temp1, settemp1] = useState(obj.imgsrc1);
  const [temp2, settemp2] = useState(obj.imgsrc2);
  const [temp3, settemp3] = useState(obj.imgsrc3);
  const [empty, setempty] = useState("");
  console.log(obj);
  useEffect(() => {}, [temp1], [temp2]);
  const change = () => {
    let val = temp2;
    settemp2(temp1);
    settemp1(val);
  };
  const change2 = () => {
    let val = temp3;
    settemp3(temp1);
    settemp1(val);
  };
  return (
    <div className="single_product_container">
      <div className="single_product_navbar">
        <Navbar />
      </div>
      <div className="product_information">
        <div className="product_images">
          <div className="prodct_leftimage">
            {obj.hasOwnProperty("imgsrc2") ? (
              <img
                src={temp2}
                alt=""
                height="40px"
                width="50px"
                onClick={() => change()}
              />
            ) : (
              ""
            )}
            {obj.hasOwnProperty("imgsrc3") ? (
              <img
                src={temp3}
                alt=""
                height="40px"
                width="50px"
                onClick={() => change2()}
              />
            ) : (
              ""
            )}
          </div>
          <div className="product_right_image">
            <img src={temp1} alt="" height="300px" width="300px" />
            <div className="product_name">Name : {obj.name}</div>
            <div className="product_description">
              Description : {obj.description}
            </div>
            <div className="product_rating">
              Rating :{" "}
              {Array.from({ length: 5 }, (elem, index) => {
                var number = index + 0.5;
                return (
                  <div>
                    {obj.rating >= index + 1 ? (
                      <StarIcon sx={{ color: "gold" }} />
                    ) : obj.rating >= number ? (
                      <StarHalfIcon sx={{ color: "gold" }} />
                    ) : (
                      <StarBorderIcon sx={{ color: "gold" }} />
                    )}
                  </div>
                );
              })}
            </div>
            <div className="product_type">Type : {obj.category}</div>
            <div className="product_cost">Cost : {obj.cost}</div>
            <div className="product_avalability"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;
