import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Update() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [dateCreated, setDateCreated] = useState('');
  const [creatorName, setCreatorName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setName(localStorage.getItem('name'));
    setCategory(localStorage.getItem('category'));
    setDateCreated(localStorage.getItem('dateCreated'));
    setCreatorName(localStorage.getItem('creatorName'));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:9595/DeliveryTb/update/${localStorage.getItem('id')}`, {
      name,
      category,
      dateCreated,
      creatorName
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
      <h2>Update Order</h2>
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label>orderid</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setOrderId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>deliveryDate</label>
          <select
            className="form-control"
            value={deliveryDate}
            onChange={(e) => setdeliveryDate(e.target.value)}
          >
            
          </select>
        </div>
        <div className="form-group">
          <label>Date Created</label>
          <input
            type="date"
            className="form-control"
            value={deliaddress}
            onChange={(e) => setdeliaddress(e.target.value)}
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
        <button type="submit" className="btn btn-primary mt-2">Update</button>
      </form>
    </div>
  );
}
