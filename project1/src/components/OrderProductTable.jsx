import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { listProduct } from '../services/ProductService';
import { createOrder } from '../services/OrderService';
import { FaRegWindowClose } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const OrderProductTable = () => {
  const [products, setProduct] = useState([]);
  const [records, setRecords] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');

  const currentDate = new Date().toLocaleDateString('en-US');
  const navigator=useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getAllProduct();
    generateInvoiceNumber();
  }, []);

  /*useEffect(() => {
    getAllProduct();
  }, []);*/

  function getAllProduct() {
    listProduct()
      .then((response) => {
        setProduct(response.data);
        setRecords(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function updateProduct(id) {
    const selectedProduct = products.find((product) => product.id === id);
    setSelectedProducts([...selectedProducts, selectedProduct]);
    // Disable the button for the selected product
    setRecords(records.map(product => {
      if (product.id === id) {
        return { ...product, disabled: true };
      }
      return product;
    }));
  }

  const Filter = (event) => {
    setRecords(
      products.filter(
        (f) =>
          f.pname.toLowerCase().includes(event.target.value) ||
          f.pcode.toString().includes(event.target.value)
      )
    );
  };

  const closeProduct = (id) => {
    const updatedProducts = selectedProducts.filter((product) => product.id !== id);
    setSelectedProducts(updatedProducts);
    // Enable the button for the closed product
    setRecords(records.map(product => {
      if (product.id === id) {
        return { ...product, disabled: false };
      }
      return product;
    }));
  };

  useEffect(() => {
    const total = selectedProducts.reduce((acc, product) => acc + product.pamount, 0);
    setTotalAmount(total);
  }, [selectedProducts]);

  function generateInvoiceNumber() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const uniqueIdentifier = Math.floor(Math.random() * 10000);
    const invoiceNumber = `${year}${month}${day}${uniqueIdentifier}`;
    setInvoiceNumber(invoiceNumber);
  }

  const handlePayment = () => {
    createOrder({
      invoiceNo: invoiceNumber,
      date: currentDate,
      billAmount: totalAmount,
      customerId: id // Passing the id extracted from the URL
    })
      .then((response) => {
        console.log("Order created successfully:", response);
      })
      .catch((error) => {
        console.error("Error creating order:", error);
      });
      navigator('/dashboard');
  };


  return (
    <div style={{ display: 'flex', marginTop: '0', marginBottom: '0' }}>
      <div style={{ flex: '1', margin: '0' }}>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <form className="d-flex">
            <input
              className="form-control me-2"
              onChange={Filter}
              type="search"
              placeholder="Search By Product Name Or Product Code"
              aria-label="Search"
              style={{ width: '650px' }}
            />
          </form>
        </div>
        <br />
        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th style={{ textAlign: 'center', fontFamily: 'Georgia, serif' }}>Product No</th>
              <th style={{ textAlign: 'center', fontFamily: 'Georgia, serif' }}>Product Code</th>
              <th style={{ textAlign: 'center', fontFamily: 'Georgia, serif' }}>Product Name</th>
              <th style={{ textAlign: 'center', fontFamily: 'Georgia, serif' }}>Amount</th>
              <th style={{ textAlign: 'center', fontFamily: 'Georgia, serif' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {records.map((product) => (
              <tr key={product.id}>
                <td style={{ textAlign: 'center', fontFamily: 'Garamond, serif' }}>{product.id}</td>
                <td style={{ textAlign: 'center', fontFamily: 'Georgia, serif' }}>{product.pcode}</td>
                <td style={{ textAlign: 'center', fontFamily: 'Georgia, serif' }}>{product.pname}</td>
                <td style={{ textAlign: 'center', fontFamily: 'Tahoma, serif' }}>{product.pamount}</td>
                <td style={{ width: '150px', textAlign: 'center' }}>
                  <button disabled={product.disabled} className="btn btn-info" onClick={() => updateProduct(product.id)} style={{ fontFamily: 'Georgia, serif' }}>Select</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
      <div style={{ flex: '1', margin: '0' }}>
        <div class="card text-dark bg-light " style={{ width: '590px', height: '610px', marginLeft: '10px' }}>
          <div class="card-header" style={{ fontSize: '1.5rem', color: 'red', textAlign: 'center' }}>INVOICE NO : {invoiceNumber} </div>
          <div class="card-header" style={{ fontSize: '1.4rem', color: 'black',fontFamily: 'Times New Roman, serif' }}>DATE : {currentDate}<span style={{ marginLeft: '180px' ,fontFamily: 'Times New Roman, serif'}}>TOTAL : Rs {totalAmount}.00</span></div>
          <div className="card-body">
           <div style={{ maxHeight: '300px', overflowY: 'auto'}}>
            <table className="table">
              <thead>
                <tr>
                  <th style={{ textAlign: 'center', fontFamily: 'Georgia, serif' }}>Product No</th>
                  <th style={{ textAlign: 'center', fontFamily: 'Georgia, serif' }}>Product Name</th>
                  <th style={{ textAlign: 'center', fontFamily: 'Georgia, serif' }}>Qty</th>
                  <th style={{ textAlign: 'center', fontFamily: 'Georgia, serif' }}>Amount</th>
                  <th style={{ textAlign: 'center', fontFamily: 'Georgia, serif' }}></th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {selectedProducts.map((selectedProduct) => (
                  <tr key={selectedProduct.id}>
                    <td style={{ textAlign: 'center', fontFamily: 'Garamond, serif' }}>{selectedProduct.id}</td>
                    <td style={{ textAlign: 'center', fontFamily: 'Georgia, serif' }}>{selectedProduct.pname}</td>
                    <td style={{ textAlign: 'center', fontFamily: 'Garamond, serif' }}>*1</td>
                    <td style={{ textAlign: 'center', fontFamily: 'Garamond, serif' }}>{selectedProduct.pamount}</td>
                    <td style={{ width: '40px' }}>
                      <button className="btn btn-clear" onClick={() => closeProduct(selectedProduct.id)} style={{ fontFamily: 'Georgia, serif' }}><FaRegWindowClose style={{ fontSize: '1.4rem', color: '#303030' }} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
            <div>
              <button className="btn btn-success" onClick={() => handlePayment()} style={{ fontFamily: 'Georgia, serif' ,width: '150px',height:'50px',marginLeft:'200px', position: 'fixed', bottom: '50px' }} >Pay Now</button>
            </div>           
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProductTable;




