import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table } from 'reactstrap';
import { deteleProduct } from '../actions/cartAction';

const Cart = () => {
  const product_current = useSelector((state) => state)
  // console.log(product_current, "product_current");
  const dispatch = useDispatch()

  return (
    <div className='container'>
      <h1 className='mt-5'>Shopping Cart</h1>
      <Table borderless className='mt-3'>
        <thead>
          <tr>
            <th>
              #Id
            </th>
            <th>
              Tên sản phẩm
            </th>
            <th>
              Giá
            </th>
            <th>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {(product_current.cartAr.length > 0) ? product_current.cartAr.map(item => {
            return (
              <tr key={item.id}>
                <th scope="row">
                  {item.id}
                </th>
                <td>
                  {item.name}
                </td>
                <td>
                  {item.quantity ? (`${item.price} x ${item.quantity}`) : item.price}
                </td>
                <td>
                  <Button color="primary" onClick={() => dispatch(deteleProduct(item))}>
                    Xóa sản phẩm
                  </Button>
                </td>
              </tr>
            )
          }) : (
            <tr>
              <td colSpan={4}>
                <span className='align-middle '>No data available in table</span>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default Cart