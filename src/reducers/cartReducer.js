import { BUY_PRODUCT, DELETE_PRODUCT } from "../actions/actionTypes"

const initialState = {
  cartAr: []
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PRODUCT: {
      const productInCart = state.cartAr.find(
        (p) => p.id === action.payload.id
      );
      if (!productInCart) {

        return {
          cartAr: [...state.cartAr, action.payload],
        }
      } else {

        const newcart = state.cartAr
        const objIndex = newcart.findIndex(
          (obj) => obj.id === action.payload.id
        )

        if (newcart[objIndex].quantity === undefined) {
          newcart[objIndex].quantity = 2;
        } else {
          newcart[objIndex].quantity = newcart[objIndex].quantity + 1
        }
        return { cartAr: [...newcart] };
      }
    }
    case DELETE_PRODUCT: {
      console.log(state, "state");
      const newcart = state.cartAr
      const objIndex = newcart.findIndex(
        (obj) => obj.id === action.payload.id
      )
      newcart.splice(objIndex, 1);
      return { cartAr: [...newcart] };
    }
    default:
      return state
  }
}

export default cartReducer