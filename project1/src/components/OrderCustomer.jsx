import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getCustomer } from '../services/CustomerService';
import {useParams } from 'react-router-dom';

const OrderCustomer = () => {
    const [name, setCusName] = useState('');
    const [address, setCusAddress] = useState('');
    const [tele, setCusPhone] = useState('');
    const { id } = useParams();
    const [errors] = useState({
        name: '',
        address: '',
        tele: ''
    });

    

    useEffect(() => {
        if (id) {
            getCustomer(id)
                .then((response) => {
                    setCusName(response.data.name);
                    setCusAddress(response.data.address);
                    setCusPhone(response.data.tele);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [id]);

    return (
        <form>
            <div className="container">
                <div className="row mb-3">
                    <div className="col">
                        <label className="form-label" style={{ fontFamily: 'Georgia, serif' }}>
                            Customer Name
                        </label>
                        <input
                            disabled
                            style={{ width: '400px', fontSize: '20px', fontFamily: 'Georgia, serif',marginRight: '25px'}}
                            type="text"
                            placeholder="Enter Customer Name"
                            name="name"
                            value={name}
                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                            onChange={(e) => setCusName(e.target.value)}
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label className="form-label" style={{ fontFamily: 'Georgia, serif' }}>
                            Customer Address
                        </label>
                        <input
                            disabled
                            style={{ width: '400px', fontSize: '20px', fontFamily: 'Georgia, serif',marginRight: '25px' }}
                            type="text"
                            placeholder="Enter Customer Address"
                            name="address"
                            value={address}
                            className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                            onChange={(e) => setCusAddress(e.target.value)}
                        />
                        {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label className="form-label" style={{ fontFamily: 'Georgia, serif' }}>
                            Phone Number
                        </label>
                        <input
                            disabled
                            style={{ width: '400px', fontSize: '20px', fontFamily: 'Tahoma, serif' }}
                            type="text"
                            placeholder="Enter Customer Phone Number"
                            name="tele"
                            value={tele}
                            className={`form-control ${errors.tele ? 'is-invalid' : ''}`}
                            onChange={(e) => setCusPhone(e.target.value)}
                        />
                        {errors.tele && <div className="invalid-feedback">{errors.tele}</div>}
                    </div>
                </div>
            </div>
        </form>
    );
};

export default OrderCustomer;



