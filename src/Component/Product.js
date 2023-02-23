import React, { useEffect, useState, useMemo } from "react";
import "../CSS/product.css";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  getdata,
  SortHightoLow,
  SearchByCategory,
} from "../store/slice/userslice";
import Card from "./Card";
const Product = () => {
  const data = useSelector((state) => {
    return state.users;
  });
  const [check, setcheck] = useState(false);
  const [itemselection, setitemselection] = useState("");
  const [arr, setarr] = useState(Object.values(data.data).flat(1));
  const dispatch = useDispatch();
  console.log(data);
  const GetAllData = () => {
    dispatch(getdata());
    setarr(Object.values(data.data).flat(1));
  };
  const setdatatoarray = (vall) => {
    console.log("clicked");
    if (vall == "all") GetAllData();
    else dispatch(SearchByCategory(vall));

    setcheck(!check);
  };
  const sorthightolow = (val) => {
    dispatch(SortHightoLow(val));
    setcheck(!check);
  };
  useEffect(() => {
    GetAllData();
  }, []);
  useEffect(
    () => {
      setarr(Object.values(data.data).flat(1));
    },
    [check],
    [data]
  );
  // useEffect(() => {
  //   setarr(Object.values(data.data).flat(1));
  // }, [data]);
  return (
    <div className="product_container">
      <div className="profuct_navbar">
        <Navbar />
      </div>
      <div className="product_sort_and_category">
        <div className="product_category">
          <select
            name="category"
            id="category"
            className="product_select"
            onChange={(e) => setdatatoarray(e.target.value)}
          >
            <option value="" disabled selected>
              Choose Categories
            </option>
            <option value="" disabled style={{ backgroundColor: "white" }}>
              {" "}
            </option>
            <option value="phone">Phone</option>
            <option
              value=""
              disabled
              style={{ backgroundColor: "white" }}
            ></option>
            <option value="laptop">Laptop</option>
            <option
              value=""
              disabled
              style={{ backgroundColor: "white" }}
            ></option>
            <option value="watch">Watch</option>
            <option
              value=""
              disabled
              style={{ backgroundColor: "white" }}
            ></option>
            <option value="TV">TV</option>
            <option
              value=""
              disabled
              style={{ backgroundColor: "white" }}
            ></option>
            <option value="all">All</option>
          </select>
        </div>
        <div className="product_sort">
          <select name="category" id="category" className="product_select">
            <option value="" disabled selected>
              Sort
            </option>
            <option
              value="Low -High"
              disabled
              style={{ backgroundColor: "white" }}
            ></option>
            <option value="High-Low" onClick={() => sorthightolow("high-low")}>
              High - Low
            </option>
            <option
              value="Low-High"
              disabled
              style={{ backgroundColor: "white" }}
            ></option>
            <option value="Low-high" onClick={() => sorthightolow("low-high")}>
              Low -High
            </option>
            {/* <option
              value="Low -High"
              disabled
              style={{ backgroundColor: "white" }}
            ></option> */}
            {/* <option value="Low-High">A-z</option>
            <option
              value=""
              disabled
              style={{ backgroundColor: "white" }}
            ></option>
            <option value="Low -High">Z-a</option> */}
          </select>
        </div>
      </div>
      <div className="item_card_container">
        <div className="item_card_container_grid">
          {arr &&
            arr.map((item, index) => {
              return (
                <div className="single_card_product">
                  <Card
                    name={item.name}
                    cost={item.cost}
                    imgsrc={item.imgsrc1}
                    rating={item.rating}
                    id={index}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Product);
