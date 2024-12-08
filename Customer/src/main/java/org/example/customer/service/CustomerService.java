package org.example.customer.service;

import org.example.customer.dto.CustomerDTO;

import java.util.List;

public interface CustomerService {
    CustomerDTO createCustomer(CustomerDTO customerDTO);
    CustomerDTO getCustomerById(Long customerId);
    List<CustomerDTO> getAllCustomers();
    CustomerDTO updateCustomer(Long customerId,CustomerDTO updatedCustomer);
    Void deleteCustomer(Long customerId);


}
