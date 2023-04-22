import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productQuantity: [],
  userInfo: null,
};

export const ItemsSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemId = action.payload._id;
      const item = state.productQuantity.find((item) => item._id === itemId);

      if (item) {
        // If the item already exists in the cart, increase the quantity by 1
        item.quantity += 1;
      } else {
        // If the item is not in the cart, add it with a quantity of 1
        state.productQuantity.push(action.payload);
      }
    },
    deleteFromCart: (state, action) => {
      state.productQuantity = state.productQuantity.filter(
        (item) => item._id !== action.payload
      );
    },
    increament: (state, action) => {
      const item = state.productQuantity.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity++;
      }
    },
    decreament: (state, action) => {
      const item = state.productQuantity.find(
        (item) => item._id === action.payload._id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    reseatCart: (state) => {
      state.productQuantity = [];
    },
    // handel user auth
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  increament,
  decreament,
  reseatCart,
  addUser,
  removeUser,
} = ItemsSlice.actions;
export default ItemsSlice.reducer;
