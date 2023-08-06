import React,{useState,useEffect} from 'react';
import './MyCart.css';
import { Element } from 'react-scroll';
import {PaymentPage} from '../Payment/PaymentPage';
import {auth} from '../../config/firebase';

export const MyCart = ({ cartItems, setCartItems,umail}) => {

  
  useEffect(() => {
    const userEmail = auth.currentUser?.email;
    if (userEmail) {
      umail=userEmail;
    }
  }, []);

  const [showPaymentPage, setShowPaymentPage] = useState(false);

        const cartItemsArray = cartItems ? Object.values(cartItems) : [];
      const handleItemCountUpdate = (itemName, newCount) => {
        const updatedCount = Math.max(newCount, 1);
        setCartItems((prevItems) => {
          const updatedCartItems = prevItems.map((item) => {
            if (item.itemName === itemName) {
              const updatedItem = { ...item, count: updatedCount };
              updatedItem.price = updatedItem.price * updatedCount;
              return updatedItem;
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
      const handlePayment = () => {
        setShowPaymentPage(true);
      };
  return (
    <Element name="mycart">
    <div className="my-cart-container">
      <h2 className="my-cart-title">My Cart</h2>
      {cartItemsArray.length === 0 ? (
        <div className="my-cart-empty">
          <p>Your cart is empty.</p>
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
                    onClick={() => handleItemRemove(item.id)} >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="4">
                <button className="my-cart-buy-button" onClick={handlePayment}>
                    Buy
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      )}
      <p className="my-cart-total">Total Amount: Rs. {calculateTotalAmount()}</p>
      {showPaymentPage && (
        <PaymentPage
          cartItems={cartItems}
          userEmail={umail}

          handlePaymentPageNavigation={setShowPaymentPage}
        />
        
      )}

    </div>
    </Element>
  );
};
