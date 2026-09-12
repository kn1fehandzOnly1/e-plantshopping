import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Array of { name, image, description, cost, quantity }
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost, description } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({
          name,
          image,
          cost,
          description,
          quantity: 1,
        });
      }
    },
    removeItem: (state, action) => {
      const payloadName = typeof action.payload === 'object' ? action.payload.name : action.payload;
      state.items = state.items.filter((item) => item.name !== payloadName);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
