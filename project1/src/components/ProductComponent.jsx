import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createProduct, getProduct, updateProduct } from '../services/ProductService'
import { useNavigate,useParams } from 'react-router-dom'
import ProductHeder from './ProductHeder'

const ProductComponent = () => {
    const [pcode,setProCode]=useState('')
    const [pname,setProName]=useState('')
    const [pqty,setProQty]=useState(1)
    const [pamount,setProAmount]=useState('')

    const {id} = useParams();
    const[errors,setErrors]=useState({
        pcode:'',
        pname:'',
        pqty:'',
        pamount:''
    })
    
    const navigator=useNavigate();

    useEffect(()=>{
        if(id){
            getProduct(id).then((response)=>{
                setProCode(response.data.pcode);
                setProName(response.data.pname);
                setProQty(response.data.pqty);
                setProAmount(response.data.pamount);
            }).catch(error =>{
                console.error(error);
            })
        }
    },[id])

    function saveOrUpdateProduct(e){
        e.preventDefault();
        const product={pcode,pname,pqty,pamount}
        console.log(product)
        if(validateForm()){
            if(id){
                updateProduct(id,product).then((response) =>{
                    console.log(response.data);
                    navigator('/Inventory');
                }).catch(error=>{
                    console.error(error);
                })
            }else{
                    createProduct(product).then((response)=>{
                    console.log(response.data);
                    navigator('/Inventory');
                }).catch(error=>{
                    console.error(error);
                })
            }

        }
        
    }

    function validateForm(){
        let valid= true;
        
        const errorsCopy ={...errors}
        if(pcode.trim()){
            errorsCopy.pcode='';
        }else{
            errorsCopy.pcode='Code is reqired';
            valid=false;
        }

        if(pname.trim()){
            errorsCopy.pname='';
        }else{
            errorsCopy.pname='Name is reqired';
            valid=false;
        }
        
        if(typeof pqty === 'string'){
        if(pqty.trim()){
            errorsCopy.pqty='';
        }else{
            errorsCopy.pqty='Quntuty is reqired';
            valid=false;
        }
        }

        if(typeof pamount === 'string'){
        if(pamount.trim()){
            errorsCopy.pamount='';
        }else{
            errorsCopy.pamount='Amount is reqired';
            valid=false;
        }
        }
        

        setErrors(errorsCopy);

        return valid;
    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center' style={{ fontFamily: 'Georgia, serif' }}>Update Product Details</h2>
        }
        else{
            return <h2 className='text-center' style={{ fontFamily: 'Georgia, serif' }}>Add New Product</h2>

        }
    }

    function cancleProduct(){
        navigator('/Inventory');
    }
  return (
    <><div>
        <ProductHeder/>
        </div>
        <div className='container' style={{ height: '75vh', alignItems: 'center'}}>

                <div className='card col-md-6 offset-md-3 offse-md-3'>
                    {pageTitle()}
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label' style={{ fontFamily: 'Georgia, serif' }}>Product Code</label>
                                <input
                                    type='text'
                                    placeholder='Enter Product Code'
                                    name='pcode'
                                    value={pcode}
                                    className={`form-control ${errors.pcode ? 'is-invalid' : ''}`}
                                    onChange={(e) => setProCode(e.target.value)}
                                >
                                </input>
                                {errors.pcode && <div className='invalid-feedback'>{errors.pcode}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label' style={{ fontFamily: 'Georgia, serif' }}>Product Name</label>
                                <input
                                    type='text'
                                    placeholder='Enter Product Name'
                                    name='pname'
                                    value={pname}
                                    className={`form-control ${errors.pname ? 'is-invalid' : ''}`}
                                    onChange={(e) => setProName(e.target.value)}
                                >
                                </input>
                                {errors.pname && <div className='invalid-feedback'>{errors.pname}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label' style={{ fontFamily: 'Georgia, serif' }}>Quntity</label>
                                <input
                                    type='text'
                                    placeholder='1'
                                    name='pqty'
                                    value={pqty}
                                    className={`form-control ${errors.pqty ? 'is-invalid' : ''}`}
                                    //onChange={(e) => setProQty(e.target.value)}
                                >
                                </input>
                                {errors.pqty && <div className='invalid-feedback'>{errors.pqty}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label' style={{ fontFamily: 'Georgia, serif' }}>Amount</label>
                                <input
                                    type='text'
                                    placeholder='Enter Product Amount'
                                    name='pamount'
                                    value={pamount}
                                    className={`form-control ${errors.pamount ? 'is-invalid' : ''}`}
                                    onChange={(e) => setProAmount(e.target.value)}
                                >
                                </input>
                                {errors.pamount && <div className='invalid-feedback'>{errors.pamount}</div>}
                            </div>

                            <button className='btn btn-success mb-2' onClick={saveOrUpdateProduct} style={{ fontFamily: 'Georgia, serif' }}>Submit</button>
                            <span style={{ marginRight: '20px' }}></span>
                            <button className='btn btn-danger mb-2' onClick={(cancleProduct)} style={{ fontFamily: 'Georgia, serif' }}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div></>
  )
}

export default ProductComponent