import React,{useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { deleteProduct,listProduct} from '../services/ProductService'
import { Form, useNavigate } from 'react-router-dom'

const ProductTable = () => {
    const [products,setProduct]= useState([])
    const navigator=useNavigate();
    /////
    const [records,setRecords]= useState([])
    
    useEffect(() => {
         getAllProduct();
    },[])
    
    function getAllProduct(){
        listProduct().then((response)=>{
            setProduct(response.data)
            setRecords(response.data);///////
         }).catch(error => {
            console.error(error);
         })
    }
    function addNewProduct(){
        navigator('/add-product');
    }

    function updateProduct(id){
        navigator(`/edit-product/${id}`)
    }

    function removeProduct(id){
        console.log(id);
        deleteProduct(id).then((response)=>{
            getAllProduct();
        }).catch(error =>{
            console.error(error);
        })
    }

    const Filter =(event) =>{
        setRecords(products.filter(f => f.pname.toLowerCase().includes(event.target.value) || f.pcode.toString().includes(event.target.value)))       
    }

  return (
    <div>
          <br></br>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button className='btn btn-primary mb-2' onClick={addNewProduct} style={{ fontFamily: 'Georgia, serif' }}>Add Product</button>
          <form className="d-flex">
        <input className="form-control me-2" onChange={Filter} type="search" placeholder="Search By Product Name Or Product Code" aria-label="Search" style={{ width: '500px' }}/>
        </form>
        </div>
          <br/>
          
          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th style={{ textAlign: 'center',fontFamily: 'Georgia, serif' }}>Product No</th>
                <th style={{ textAlign: 'center' ,fontFamily: 'Georgia, serif'}}>Product Code</th>
                <th style={{ textAlign: 'center' ,fontFamily: 'Georgia, serif'}}>Product Name</th>
                <th style={{ textAlign: 'center' ,fontFamily: 'Georgia, serif'}}>Qty</th>
                <th style={{ textAlign: 'center' ,fontFamily: 'Georgia, serif'}}>Amount</th>
                <th style={{ textAlign: 'center' ,fontFamily: 'Georgia, serif'}}>Status</th>
              </tr>
            </thead>
            <tbody>
              {
                records.map(product =>//////
                  <tr key={product.id}>
                    <td style={{ textAlign: 'center',fontFamily: 'Garamond, serif' }}>{product.id}</td>
                    <td style={{ textAlign: 'center',fontFamily: 'Georgia, serif' }}>{product.pcode}</td>
                    <td style={{ textAlign: 'center',fontFamily: 'Georgia, serif' }}>{product.pname}</td>
                    <td style={{ textAlign: 'center',fontFamily: 'Garamond, serif' }}>{product.pqty}</td>
                    <td style={{ textAlign: 'center',fontFamily: 'Garamond, serif' }}>{product.pamount}</td>
                    <td style={{ width: '300px',textAlign: 'center' }}>
                    <button className='btn btn-info' onClick={() => updateProduct(product.id)} style={{ fontFamily: 'Georgia, serif' }}>Update</button>
                    <span style={{ marginRight: '10px' }}></span>
                    <button className='btn btn-danger' onClick={() => removeProduct(product.id)} style={{ fontFamily: 'Georgia, serif' }}>Delete</button>
                    </td>
                  </tr>)
              }
            </tbody>
          </table>
        </div>
  );
}

export default ProductTable