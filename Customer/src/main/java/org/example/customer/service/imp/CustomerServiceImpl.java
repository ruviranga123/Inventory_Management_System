package org.example.customer.service.imp;

import lombok.AllArgsConstructor;
import org.example.customer.dto.CustomerDTO;
import org.example.customer.entity.Customer;
import org.example.customer.exception.ResourceNotFoundException;
import org.example.customer.mapper.CustomerMapper;
import org.example.customer.repo.CustomerRepo;
import org.example.customer.service.CustomerService;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CustomerServiceImpl implements CustomerService {
    private CustomerRepo customerRepo;
    @Override
    public CustomerDTO createCustomer(CustomerDTO customerDTO) {
        Customer customer= CustomerMapper.mapToCustomer(customerDTO);
        Customer saveCustomer=customerRepo.save(customer);
        return CustomerMapper.mapToCustomerDto(saveCustomer);
    }

    @Override
    public CustomerDTO getCustomerById(Long customerId) {
        Customer customer= customerRepo.findById(customerId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Customer is not exist with given id :" +customerId));
        return CustomerMapper.mapToCustomerDto(customer);
    }

    @Override
    public List<CustomerDTO> getAllCustomers() {
        List<Customer> customers= customerRepo.findAll();

        return customers.stream().map(customer -> CustomerMapper.mapToCustomerDto(customer))
                .collect(Collectors.toList());
    }

    @Override
    public CustomerDTO updateCustomer(Long customerId, CustomerDTO updatedCustomer) {
        Customer customer= customerRepo.findById(customerId).orElseThrow(
                ()->new ResourceNotFoundException("Customer is not exist with given id :" +customerId)
        );
        customer.setName(updatedCustomer.getName());
        customer.setAddress(updatedCustomer.getAddress());
        customer.setTele(updatedCustomer.getTele());
        Customer saveCustomerobj=customerRepo.save(customer);

        return CustomerMapper.mapToCustomerDto(saveCustomerobj);
    }

    @Override
    public Void deleteCustomer(Long customerId) {
        Customer customer= customerRepo.findById(customerId).orElseThrow(
                ()->new ResourceNotFoundException("Customer is not exist with given id :" +customerId)
        );
        customerRepo.deleteById(customerId);
        return null;
    }

}
