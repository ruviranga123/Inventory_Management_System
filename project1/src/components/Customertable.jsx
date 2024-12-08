import React,{useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { deleteCustomer,listCustomers} from '../services/CustomerService'
import { Form, useNavigate } from 'react-router-dom'
const Customertable = () => {
     
    const [customers,setCusttomers]= useState([])
    const navigator=useNavigate();
    /////
    const [records,setRecords]= useState([])
    
    useEffect(() => {
         getAllCustomer();
    },[])
    
    function getAllCustomer(){
        listCustomers().then((response)=>{
            setCusttomers(response.data)
            setRecords(response.data);///////
         }).catch(error => {
            console.error(error);
         })
    }
    function addNewCustomer(){
        navigator('/add-customer');
    }

    function orderCustomer(id){
        navigator(`/Order/${id}`);
    }

    function updateCustomer(id){
        navigator(`/edit-customer/${id}`)
    }

    function removeCustomer(id){
        console.log(id);
        deleteCustomer(id).then((response)=>{
            getAllCustomer();
        }).catch(error =>{
            console.error(error);
        })
    }
    /////////
    const Filter =(event) =>{
        setRecords(customers.filter(f => f.name.toLowerCase().includes(event.target.value) || f.tele.toString().includes(event.target.value)))       
    }
      return (
        <div>
          <br></br>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button className='btn btn-primary mb-2' onClick={addNewCustomer} style={{ fontFamily: 'Georgia, serif' }}>Add Customer</button>
          <form className="d-flex">
        <input className="form-control me-2" onChange={Filter} type="search" placeholder="Search By Customer Name Or Phone Number" aria-label="Search" style={{ width: '500px' }}/>
        </form>
        </div>
          <br/>
          
          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th style={{ textAlign: 'center',fontFamily: 'Georgia, serif' }}>Customer ID</th>
                <th style={{ textAlign: 'center' ,fontFamily: 'Georgia, serif'}}>Name</th>
                <th style={{ textAlign: 'center' ,fontFamily: 'Georgia, serif'}}>Address</th>
                <th style={{ textAlign: 'center' ,fontFamily: 'Georgia, serif'}}>Phone Number</th>
                <th style={{ textAlign: 'center' ,fontFamily: 'Georgia, serif'}}>Status</th>
              </tr>
            </thead>
            <tbody>
              {
                records.map(customer =>//////
                  <tr key={customer.id}>
                    <td style={{ textAlign: 'center',fontFamily: 'Garamond, serif' }}>{customer.id}</td>
                    <td style={{ textAlign: 'center',fontFamily: 'Georgia, serif' }}>{customer.name}</td>
                    <td style={{ textAlign: 'center',fontFamily: 'Georgia, serif' }}>{customer.address}</td>
                    <td style={{ textAlign: 'center',fontFamily: 'Garamond, serif' }}>{customer.tele}</td>
                    <td style={{ width: '300px',textAlign: 'center' }}>
                    <button className='btn btn-success' onClick={() =>orderCustomer(customer.id)} style={{ fontFamily: 'Georgia, serif' }}>Order</button>    
                    <span style={{ marginRight: '10px' }}></span>
                    <button className='btn btn-info' onClick={() => updateCustomer(customer.id)} style={{ fontFamily: 'Georgia, serif' }}>Update</button>
                    <span style={{ marginRight: '10px' }}></span>
                    <button className='btn btn-danger' onClick={() => removeCustomer(customer.id)} style={{ fontFamily: 'Georgia, serif' }}>Delete</button>
                    </td>
                  </tr>)
              }
            </tbody>
          </table>
        </div>
      );
    }

export default Customertable
