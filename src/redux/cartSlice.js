import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {}, // { id: { plant, quantity } }
  totalCount: 0,
  totalCost: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const plant = action.payload;
      if (!state.items[plant.id]) {
        state.items[plant.id] = { plant, quantity: 1 };
        state.totalCount += 1;
        state.totalCost += plant.price;
      }
    },
    increment: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].quantity++;
        state.totalCount++;
        state.totalCost += state.items[id].plant.price;
      }
    },
    decrement: (state, action) => {
      const id = action.payload;
      if (state.items[id] && state.items[id].quantity > 0) {
        state.items[id].quantity--;
        state.totalCount--;
        state.totalCost -= state.items[id].plant.price;
        if (state.items[id].quantity === 0) delete state.items[id];
      }
    },
    remove: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.totalCount -= state.items[id].quantity;
        state.totalCost -= state.items[id].quantity * state.items[id].plant.price;
        delete state.items[id];
      }
    },
  },
});

export const { addToCart, increment, decrement, remove } = cartSlice.actions;
export default cartSlice.reducer;