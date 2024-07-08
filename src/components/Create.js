import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Create() {
  const [orderId, setOrderId] = useState('');
  const [deliaddress, setdeliaddress]= useState('');
  const [dateCreated, setDateCreated] = useState('');
  const [fee,setfee] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:7000/DeliveryTb/add', {
      orderId,
      deliaddress,
      dateCreated,
      fee
    })
    .then(response => {
      console.log(response.data);
      navigate('/');
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <div className="container">
      <h2>Add orders</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>orderid</label>
          <input
            type="text"
            className="form-control"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>DelAddress</label>
          <input
            type="text"
            className="form-control"
            value={deliaddress}
            onChange={(e) => setdeliaddress(e.target.value)}
          />
          
        </div>
        <div className="form-group">
          <label>Date Created</label>
          <input
            type="date"
            className="form-control"
            value={dateCreated}
            onChange={(e) => setDateCreated(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>fee</label>
          <input
            type="text"
            className="form-control"
            value={fee}
            onChange={(e) => setfee(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  );
}
