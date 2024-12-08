package org.example.product.service;

import org.example.product.dto.ProductDTO;

import java.util.List;

public interface ProductService {
    ProductDTO createProduct(ProductDTO productDTO);
    ProductDTO getProductById(Long productId);
    List<ProductDTO> getAllProduct();
    ProductDTO updateProduct(Long productId,ProductDTO updatedProduct);
    Void deleteProduct(Long productId);
}
