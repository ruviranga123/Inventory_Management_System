package org.example.product.repo;

import org.example.product.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductRepo extends JpaRepository<Product,Long> {
    Optional<Product> findById(Long id);
}
