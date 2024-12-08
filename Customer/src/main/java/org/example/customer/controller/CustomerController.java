package org.example.customer.controller;

import lombok.AllArgsConstructor;
import org.example.customer.dto.CustomerDTO;
import org.example.customer.service.CustomerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("/api/customers")
public class CustomerController {
    private CustomerService customerService;

    @PostMapping
    public ResponseEntity<CustomerDTO> createCustomer(@RequestBody CustomerDTO customerDTO){
           CustomerDTO savedCustomer = customerService.createCustomer(customerDTO);
           return  new ResponseEntity<>(savedCustomer, HttpStatus.CREATED);
    }
    @GetMapping("{id}")
    public ResponseEntity<CustomerDTO> getCustomerById(@PathVariable("id") Long customerId){
        CustomerDTO customerDTO=customerService.getCustomerById(customerId);
        return ResponseEntity.ok(customerDTO);
    }
    @GetMapping
    public ResponseEntity<List<CustomerDTO>> getAllCustomers(){
        List<CustomerDTO> customers= customerService.getAllCustomers();
        return ResponseEntity.ok(customers);
    }
    @PutMapping("{id}")
    public ResponseEntity<CustomerDTO> updateCustomer(@PathVariable("id") Long customerId,@RequestBody CustomerDTO updateCustomer){
        CustomerDTO customerDTO= customerService.updateCustomer(customerId,updateCustomer);
        return ResponseEntity.ok(customerDTO);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteCustomer(@PathVariable("id") Long customerId){
        customerService.deleteCustomer(customerId);
        return ResponseEntity.ok("Employee deleted successfully");
    }

}
