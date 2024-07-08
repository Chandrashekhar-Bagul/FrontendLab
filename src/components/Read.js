import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Read() {
  const navigate = useNavigate();
  const [Delivery, setorders] = useState([]);

  const getorders = () => {
    axios.get('http://localhost:7000/Delivery/getorders')
      .then(response => {
        console.log(response.data);
        setorders(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleRegister = () => {
    navigate('/create');
  };

  const handleLocalStorage = (id, orderid, deliveryDate, deliadress, fee) => {
    localStorage.setItem("id", id);
    localStorage.setItem("orderid", orderid);
    localStorage.setItem("deliveryDate", deliveryDate);
    localStorage.setItem("deliadress", deliadress);
    localStorage.setItem("fee", fee);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:7000/Delivery/delete/${id}`)
      .then(response => {
        console.log(response.data);
        getorders();
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    getorders();
  }, []);

  return (
    <div classorderid="container mt-3 mb-3">
      <button classorderid="btn btn-info m-2" onClick={handleRegister}>Add order</button>
      <h3>Orders</h3>
      <div classorderid="row mt-3 mb-3">
        <table classorderid="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">orderid</th>
              <th scope="col">deliveryDate</th>
              <th scope="col">deliaddress</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {Delivery.map(orders => (
              <tr key={orders._id}>
                <td>{orders.id}</td>
                <td>{orders.orderid}</td>
                <td>{orders.deliadress}</td>
                <td>{new Date(orders.deliveryDate).toLocaleDateString()}</td>
                <td>{orders.fee}</td>
                <td>
                  <Link to="/update">
                    <button
                      classorderid="btn btn-success"
                      onClick={() => handleLocalStorage(Delivery_id, Deliveryorderid, DeliverydeliveryDate, Deliverydeliadress, DeliveryTbfee)}
                    >
                      Update
                    </button>
                  </Link>
                </td>
                <td>
                  <button classorderid="btn btn-danger" onClick={() => handleDelete(orders._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
