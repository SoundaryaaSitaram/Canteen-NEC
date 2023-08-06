import React, { useState,useEffect } from 'react';
import PaymentSuccessModal from '../PaymentSuccessful/PaymentSuccessfull';
import { db } from '../../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import {auth} from '../../config/firebase';
import "./PaymentPage.css";


export const PaymentPage = ({ cartItems,userEmail, handlePaymentPageNavigation }) => {
  useEffect(() => {
    const umail = auth.currentUser?.email;
    if (umail) {
      userEmail=umail;
    }
  }, []);
  const [bankDetails, setBankDetails] = useState({
    accountNumber: '',
    name: '',
  });
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBankDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };



  const handleSaveOrder = async () => {

    const currentDate = new Date().toISOString();
    const orderData = {
      date: currentDate,
      items: cartItems,
      email: userEmail,
    };

    try {
      await addDoc(collection(db, 'orders'), orderData);
      handlePaymentPageNavigation(false);
      alert('Order saved successfully!');

    } catch (error) {
      console.error('Error saving order:', error);

    }
  };



const handlePayment = () => {

  if (!cartItems || cartItems.some((item) => item === undefined)) {
    alert('Cart items are invalid.');
    return;
  }
  handleSaveOrder();
  setShowModal(true);
};

  const handleModalClose = () => {
    setShowModal(true);

  };

  return (
    <div id='payment'>
      <h2>Payment</h2>
      <form>
        <input
          type="text"
          name="accountNumber"
          placeholder="Account Number"
          value={bankDetails.accountNumber}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Name of Account"
          value={bankDetails.name}
          onChange={handleInputChange}
          required
        />
      </form>
      <button onClick={handlePayment}>Make Payment</button>
      {showModal && <PaymentSuccessModal onClose={handleModalClose} />}
    </div>
  );
};

