import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createCustomer, getCustomer, updateCustomer } from '../services/CustomerService'
import { useNavigate,useParams } from 'react-router-dom'
import CustomerHeder from './CustomerHeder'

const CustomerComponent = () => {

    const [name,setCusName]=useState('')
    const [address,setCusAddress]=useState('')
    const [tele,setCusPhone]=useState('')

    const {id} = useParams();
    const[errors,setErrors]=useState({
        name:'',
        address:'',
        tele:''
    })
    
    const navigator=useNavigate();

    useEffect(()=>{
        if(id){
            getCustomer(id).then((response)=>{
                setCusName(response.data.name);
                setCusAddress(response.data.address);
                setCusPhone(response.data.tele);
            }).catch(error =>{
                console.error(error);
            })
        }
    },[id])

    function saveOrUpdateCustomer(e){
        e.preventDefault();
        const customer={name,address,tele}
        console.log(customer)
        if(validateForm()){
            if(id){
                updateCustomer(id,customer).then((response) =>{
                    console.log(response.data);
                    navigator('/customer');
                }).catch(error=>{
                    console.error(error);
                })
            }else{
                    createCustomer(customer).then((response)=>{
                    console.log(response.data);
                    navigator('/customer');
                }).catch(error=>{
                    console.error(error);
                })
            }

        }
        
    }

    function validateForm(){
        let valid= true;
        
        const errorsCopy ={...errors}

        if(name.trim()){
            errorsCopy.name='';
        }else{
            errorsCopy.name='Name is reqired';
            valid=false;
        }
        
        if(typeof tele === 'string'){
        if(tele.trim()){
            errorsCopy.tele='';
        }else{
            errorsCopy.tele='Phone number is reqired';
            valid=false;
        }
        }
        if(address.trim()){
            errorsCopy.address='';
        }else{
            errorsCopy.address='Address is reqired';
            valid=false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center' style={{ fontFamily: 'Georgia, serif' }}>Update Customer Details</h2>
        }
        else{
            return <h2 className='text-center' style={{ fontFamily: 'Georgia, serif' }}>Add New Customer</h2>

        }
    }

    function cancleCustomer(){
        navigator('/customer');
    }
    return (
        <><div>
            <CustomerHeder />
        </div>
        <div className='container' style={{ height: '75vh', alignItems: 'center'}}>

                <div className='card col-md-6 offset-md-3 offse-md-3'>
                    {pageTitle()}
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label' style={{ fontFamily: 'Georgia, serif' }}>Customer Name</label>
                                <input
                                    type='text'
                                    placeholder='Enter Customer Name'
                                    name='name'
                                    value={name}
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    onChange={(e) => setCusName(e.target.value)}
                                >
                                </input>
                                {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label' style={{ fontFamily: 'Georgia, serif' }}>Customer Address</label>
                                <input
                                    type='text'
                                    placeholder='Enter Customer Address'
                                    name='address'
                                    value={address}
                                    className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                                    onChange={(e) => setCusAddress(e.target.value)}
                                >
                                </input>
                                {errors.address && <div className='invalid-feedback'>{errors.address}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label' style={{ fontFamily: 'Georgia, serif' }}>Phone Number</label>
                                <input
                                    type='text'
                                    placeholder='Enter Customer Phone Number'
                                    name='tele'
                                    value={tele}
                                    className={`form-control ${errors.tele ? 'is-invalid' : ''}`}
                                    onChange={(e) => setCusPhone(e.target.value)}
                                >
                                </input>
                                {errors.tele && <div className='invalid-feedback'>{errors.tele}</div>}
                            </div>
                            <button className='btn btn-success mb-2' onClick={saveOrUpdateCustomer} style={{ fontFamily: 'Georgia, serif' }}>Submit</button>
                            <span style={{ marginRight: '20px' }}></span>
                            <button className='btn btn-danger mb-2' onClick={(cancleCustomer)} style={{ fontFamily: 'Georgia, serif' }}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div></>
    );
}

export default CustomerComponent