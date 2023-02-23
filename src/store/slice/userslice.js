import { createSlice } from "@reduxjs/toolkit";
import Data from "../../Assets/API";
const userSlice = createSlice({
  name: "users",
  initialState: {
    data: Data,
    categoryData: Data,
    cart: [],
    category: "all",
  },
  reducers: {
    getdata(state, action) {
      state.category = "all";
      console.log("hello");
      state.data = state.categoryData;
    },
    SearchByCategory(state, action) {
      console.log("searchbycategory");
      state.category = action.payload;
      let dummy = [];
      dummy = Object.values(state.categoryData)
        .flat(1)
        .filter((item) => {
          if (item.category == action.payload) return item;
        });
      state.data = dummy;
      console.log(state);
    },
    SortHightoLow(state, action) {
      const SORT = (a, b) => {
        if (action.payload == "high-low") return b.cost - a.cost;
        return a.cost - b.cost;
      };
      let dummyarr = [];
      if (state.category == "all")
        dummyarr = Object.values(state.categoryData).flat(1).sort(SORT);
      else
        dummyarr = Object.values(state.categoryData[state.category])
          .flat(1)
          .sort(SORT);
      state.data = dummyarr;
    },
    searchbyvalue(state, action) {
      console.log(action.payload);
      let dummy = [];
      dummy = Object.values(state.categoryData)
        .flat(1)
        .filter((item) => {
          if (
            item.category
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            item.name.toLowerCase().includes(action.payload.toLowerCase()) ||
            item.description
              .toLowerCase()
              .includes(action.payload.toLowerCase())
          )
            return item;
        });
      state.data = dummy;
    },
    setItemToCart(state, action) {
      console.log(action.payload);
      if (state.category == "all") {
        let arr = Object.values(state.categoryData).flat(1);
        state.cart.push(arr[action.payload]);
      } else {
        state.cart.push(state.data[action.payload]);
      }
    },
  },
});
export default userSlice.reducer;
export const {
  getdata,
  SortHightoLow,
  SearchByCategory,
  searchbyvalue,
  setItemToCart,
} = userSlice.actions;
