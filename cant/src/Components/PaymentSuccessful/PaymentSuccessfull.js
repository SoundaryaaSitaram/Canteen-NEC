import React from 'react';

const PaymentSuccessModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Payment Successful!</h2>
        <p>Your payment has been processed successfully.</p>
        <button onClick={onClose}>Back to Cart</button>
      </div>
    </div>
  );
};

export default PaymentSuccessModal;
