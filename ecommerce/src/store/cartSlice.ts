import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../typing";


interface CartState {
  item: Product[]
}

const initialState: CartState = {
  item: []
}
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers:{
    addItem: (state,action: PayloadAction<Omit<Product,"quantity">>)  => {
      const findItem = state.item.find(item => item.id === action.payload.id);
      if(findItem?.quantity){
        findItem.quantity += 1
      }else{
        state.item.push({...action.payload, quantity: 1 })
      }
    },
    remove: (state, action: PayloadAction<{ id: number }>) => {
      state.item = state.item.reduce<Product[]>((acc, item) => {
        if (item.id === action.payload.id) {

          if (item.quantity && item.quantity > 1 ) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
    },
    clearCart: ()=>  initialState
  }
})

export const {addItem,remove,clearCart} = cartSlice.actions;
export default cartSlice.reducer