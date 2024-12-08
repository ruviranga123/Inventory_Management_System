import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import{ FaRegWindowClose}from "react-icons/fa";

const OrderMessage = () => {
  return (
    <div className="d-flex justify-content-center" style={{ marginTop: '200px', marginLeft:'250px'}}> 
      <div className="card border-danger mb-3" style={{ maxWidth: '25rem' }}>
        <div className="card-header text-center"><FaRegWindowClose style={{fontSize: '2rem', color: '#DE0421'}}/></div>
        <div className="card-body text-danger">
          <h5 className="card-title text-center">Can't Display This Page</h5>
          <p className="card-text">To initiate the process, it is recommended that you navigate to the customer page first, where you can proceed to place an order.</p>
        </div>
      </div>
    </div>
  )
}

export default OrderMessage