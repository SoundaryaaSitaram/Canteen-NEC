import { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { auth } from '../../config/firebase';
import "./OrderList.css";
import { Element } from 'react-scroll';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const userEmail = auth.currentUser?.email;

  useEffect(() => {
    const fetchOrders = async () => {
      const ordersRef = collection(db, 'orders');
      const q = query(ordersRef, where('email', '==', userEmail));

      try {
        const querySnapshot = await getDocs(q);
        const ordersData = querySnapshot.docs.map((doc) => doc.data());
        setOrders(ordersData);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    if (userEmail) {
      fetchOrders();
    }
  }, [userEmail]);
  const formatDate = (date) => {
    const formattedDate = new Date(date);
    return formattedDate.toLocaleDateString('en-US');
  };
  return (
    <Element name='myorders'>
    <div>
      <h2>Your Orders</h2> 
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Order Date</th>
            <th>Item Name</th>
            <th>Item Price</th>
            <th>Item Count</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{formatDate(order.date)}</td>
              <td>
                <ul>
                  {order.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item.itemName}
                    </li>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {order.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item.price}
                    </li>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {order.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item.count}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </Element>
  );
};

export default OrderList;
