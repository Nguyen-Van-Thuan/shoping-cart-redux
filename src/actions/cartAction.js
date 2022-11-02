import { BUY_PRODUCT, DELETE_PRODUCT } from "./actionTypes";

export const buyProduct = (product) => {

  // console.log("buyProduct action");
  return {
    type: BUY_PRODUCT, // Key action
    payload: product // Nhan gia tri product gui len
  }
}

export const deteleProduct = (product) => {
  console.log("delete product");
  return {
    type: DELETE_PRODUCT,
    payload: product
  }
}