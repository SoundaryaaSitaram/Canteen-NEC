import React from 'react'

export const CartItem = ({itemName, price, count}) => {
  return (
    <tr>
    <td>{itemName}</td>
    <td>{price}</td>
    <td>{count}</td>
  </tr>
  )
}
