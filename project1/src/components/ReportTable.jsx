import React,{useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { listOrders} from '../services/OrderService'


const ReportTable = () => {
    const [orders,setOrders]= useState([])
    /////
    const [records,setRecords]= useState([])
    
    useEffect(() => {
         getAllOrders();
    },[])
    
    function getAllOrders(){
        listOrders().then((response)=>{
            setOrders(response.data)
            setRecords(response.data);///////
         }).catch(error => {
            console.error(error);
         })
    }
    

    
    const Filter =(event) =>{
        setRecords(orders.filter(f => f.invoiceNo.toString().includes(event.target.value)))       
    }
  return (
    <div>
          <br></br>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <form className="d-flex">
        <input className="form-control me-2" onChange={Filter} type="search" placeholder="Search By Invoice Number" aria-label="Search" style={{ width: '500px' }}/>
        </form>
        </div>
          <br/>
          <div style={{ maxHeight: '300px', overflowY: 'auto'}}>
          <table class="table">
            <thead>
              <tr>
                <th style={{ textAlign: 'center',fontFamily: 'Georgia, serif' }}>Order ID</th>
                <th style={{ textAlign: 'center' ,fontFamily: 'Georgia, serif'}}>Customer ID</th>
                <th style={{ textAlign: 'center' ,fontFamily: 'Georgia, serif'}}>Invoice Number</th>
                <th style={{ textAlign: 'center' ,fontFamily: 'Georgia, serif'}}>Date</th>
                <th style={{ textAlign: 'center' ,fontFamily: 'Georgia, serif'}}>Amount</th>
              </tr>
            </thead>
            <tbody>
              {
                records.map(order =>//////
                  <tr key={order.id}>
                    <td style={{ textAlign: 'center',fontFamily: 'Garamond, serif' }}>{order.id}</td>
                    <td style={{ textAlign: 'center',fontFamily: 'Garamond, serif' }}>{order.customerId}</td>
                    <td style={{ textAlign: 'center',fontFamily: 'Garamond, serif' }}>{order.invoiceNo}</td>
                    <td style={{ textAlign: 'center',fontFamily: 'Garamond, serif' }}>{order.date}</td>
                    <td style={{ textAlign: 'center',fontFamily: 'Garamond, serif' }}>{order.billAmount}</td>
                  </tr>)
              }
            </tbody>
          </table>
          </div>
        </div>
  )
}

export default ReportTable