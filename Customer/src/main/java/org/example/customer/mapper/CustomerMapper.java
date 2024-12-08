package org.example.customer.mapper;

import org.example.customer.dto.CustomerDTO;
import org.example.customer.entity.Customer;

public class CustomerMapper {
    public static CustomerDTO mapToCustomerDto(Customer customer){
        return  new CustomerDTO(
                customer.getId(),
                customer.getName(),
                customer.getAddress(),
                customer.getTele()
        );
    }
    public static Customer mapToCustomer(CustomerDTO customerDTO){
        return new Customer(
                customerDTO.getId(),
                customerDTO.getName(),
                customerDTO.getAddress(),
                customerDTO.getTele()
        );
    }
}
