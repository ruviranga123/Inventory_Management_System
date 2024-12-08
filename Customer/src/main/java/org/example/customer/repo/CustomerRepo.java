package org.example.customer.repo;

import org.example.customer.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CustomerRepo extends JpaRepository<Customer,Long> {

    Optional<Customer> findById(Long id);
    //Optional<Customer> findByTele(Long tele);

}
