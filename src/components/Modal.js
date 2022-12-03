import React, {useState} from 'react';
import { useGlobalContext } from './context/context';
import { FaTimes } from 'react-icons/fa';
import PaystackPop from '@paystack/inline-js';
const Modal = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [lastName, setLastName] = useState('');
  const payWithPaystack = (e) =>{
    e.preventDefault();
    const paystack = new PaystackPop()
    paystack.newTransaction({
      key:"pk_test_969ce6d53b7138300180e95cf047c4859fbfa776",
      amount: total * 100,
      email: email,
      firstname: firstName,
      lastname: lastName,
      onSuccess(transaction){
        let message = `Payment Complete! Reference ${transaction.reference}`
        alert(message)
        setEmail('')
        setFirstName('')
        setLastName('')
        closeModal()
        clearCart();
      },
      onCancel(){
        alert('You have cancelled the transaction!')
      }
    })
  }

  const { isModalOpen, closeModal, total, clearCart } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className='modal-container'>
        <div>
        <div className="mb-5">
        <h2>Make Payment</h2>
        </div>
        <form id="paymentForm">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input className="form-control" value={email} type="email" id="email-address" onChange={(e) =>setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input className="form-control" type="tel" id="amount" placeholder={total.toLocaleString()} readOnly required />
        </div>
        <div className="form-group">
          <label htmlFor="first-name">First Name</label>
          <input className="form-control" value={firstName} type="text" id="first-name" onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last Name</label>
          <input className="form-control" value={lastName} type="text" id="last-name" onChange={(e) => setLastName(e.target.value)}/>
        </div>
        <div className="form-submit mt-3">
          <button className="btn btn-info btn-block" type="submit" onClick={payWithPaystack}> Pay </button>
        </div>
      </form>

        </div>
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  );
};

export default Modal;