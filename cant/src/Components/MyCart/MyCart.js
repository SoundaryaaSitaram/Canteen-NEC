// import React from 'react'
// // import { CartItem } from '../CartItem/CartItem';
// import "./MyCart.css";
// // import { Menu } from '../Menu/Menu';



// export const MyCart = ({cartItems,setCartItems}) => {
//   // eslint-disable-next-line no-unused-vars
  
//   // const updateCart = (cartItems, newItem) => {
//   //   const updatedCartItems = { ...cartItems };
//   //   if (updatedCartItems[newItem.id]) {
//   //     updatedCartItems[newItem.id].count += 1;
//   //   } else {
//   //     updatedCartItems[newItem.id] = { ...newItem, count: 1 };
//   //   }
//   //   return updatedCartItems;
//   // };
//     if (!cartItems || Object.keys(cartItems).length === 0) {
//         return <p>Your cart is empty.</p>;
//       }
//   const cartItemsArray = Object.values(cartItems);

//   const handleItemCountUpdate = (itemName, newCount) => {
//     const updatedCount = Math.max(newCount, 1);
//     setCartItems((prevItems) => {
//       const updatedCartItems = prevItems.map(item => {
//         if (item.itemName === itemName) {
//           return { ...item, count: updatedCount};
//         }
//         return item;
//       });
//       return updatedCartItems;
//     });
//   };
//   const handleItemRemove = (itemId) => {
//     setCartItems((prevItems) => {
//       const updatedCartItems = prevItems.filter((item) => item.id !== itemId);
//       return updatedCartItems;
//     });
//   };
//   const calculateTotalAmount = () => {
//     return cartItemsArray.reduce((total, item) => total + item.price * item.count, 0);
//   };
  
//   return (
//     <div>
//       <h2>My Cart</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Item Name</th>
//             <th>Price</th>
//             <th>Count</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* {cartItemsArray.map((item, index) => (
//             <CartItem key={index} itemName={item.itemName} price={item.price} count={handleItemCountUpdate} />
//           ))} */}
//           {cartItemsArray.map((item, index) => (
//             <tr key={index}>
//               <td>{item.itemName}</td>
//               <td>{item.price}</td>
//               <td>
//                 <input
//                   type="number"
//                   value={item.count}
//                   onChange={(e) => handleItemCountUpdate(item.itemName, parseInt(e.target.value))}
//                 />
//               </td>
//               <td>
//                 <button onClick={() => handleItemRemove(item.id)}>Remove</button>
//               </td>
//             </tr>
           
//           ))}
//           <tr>
//             <button>Buy</button>
//           </tr>
//         </tbody>
//         {/* </tbody> */}
//       </table>
//       <p>Total Amount: Rs. {calculateTotalAmount()}</p>
//     </div>
//   )
// }; 
import React from 'react';
import './MyCart.css';

export const MyCart = ({ cartItems, setCartItems }) => {
  // ... Your existing MyCart component code ...
  // const updateCart = (cartItems, newItem) => {
      //   const updatedCartItems = { ...cartItems };
      //   if (updatedCartItems[newItem.id]) {
      //     updatedCartItems[newItem.id].count += 1;
      //   } else {
      //     updatedCartItems[newItem.id] = { ...newItem, count: 1 };
      //   }
      //   return updatedCartItems;
      // };
        if (!cartItems || Object.keys(cartItems).length === 0) {
            return <p>Your cart is empty.</p>;
          }
      const cartItemsArray = Object.values(cartItems);
    
      const handleItemCountUpdate = (itemName, newCount) => {
        const updatedCount = Math.max(newCount, 1);
        setCartItems((prevItems) => {
          const updatedCartItems = prevItems.map(item => {
            if (item.itemName === itemName) {
              return { ...item, count: updatedCount};
            }
            return item;
          });
          return updatedCartItems;
        });
      };
      const handleItemRemove = (itemId) => {
        setCartItems((prevItems) => {
          const updatedCartItems = prevItems.filter((item) => item.id !== itemId);
          return updatedCartItems;
        });
      };
      const calculateTotalAmount = () => {
        return cartItemsArray.reduce((total, item) => total + item.price * item.count, 0);
      };
  return (
    <div className="my-cart-container">
      <h2 className="my-cart-title">My Cart</h2>
      {cartItemsArray.length === 0 ? (
        <div className="my-cart-empty">
          <p>Your cart is empty.</p>
          <img src="/path/to/empty-cart-image.png" alt="Empty Cart" />
        </div>
      ) : (
        <table className="my-cart-table">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Price</th>
              <th>Count</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItemsArray.map((item, index) => (
              <tr key={index}>
                <td>
                  {/* <img
                    className="my-cart-item-image"
                    src={item.imageSrc}
                    alt={item.altText}
                  /> */}
                  <span className="my-cart-item-name">{item.itemName}</span>
                </td>
                <td className="my-cart-item-price">{item.price}</td>
                <td>
                  <input
                    className="my-cart-item-count"
                    type="number"
                    value={item.count}
                    onChange={(e) =>
                      handleItemCountUpdate(
                        item.itemName,
                        parseInt(e.target.value)
                      )
                    }
                  />
                </td>
                <td>
                  <button
                    className="my-cart-remove-button"
                    onClick={() => handleItemRemove(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="4">
                <button className="my-cart-buy-button">Buy</button>
              </td>
            </tr>
          </tbody>
        </table>
      )}
      <p className="my-cart-total">Total Amount: Rs. {calculateTotalAmount()}</p>
    </div>
  );
};
