import React from 'react'
import OrderProductTable from '../components/OrderProductTable';
import OrderCustomer from '../components/OrderCustomer';


const Order=() => {
    return (
    
        <div className="order-details-content">
            <div>
              <OrderCustomer />
              <OrderProductTable /> 
          </div>
          </div>
        
    );
  };

export default Order