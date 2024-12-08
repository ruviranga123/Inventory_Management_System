package org.example.product.mapper;

import org.example.product.dto.ProductDTO;
import org.example.product.entity.Product;

public class ProductMapper {
    public  static ProductDTO mapToProductDto(Product product){
        return new ProductDTO(
                product.getId(),
                product.getPCode(),
                product.getPName(),
                product.getPQty(),
                product.getPAmount()
        );
    }
    public static Product mapToProduct(ProductDTO productDTO){
        return new Product(
                productDTO.getId(),
                productDTO.getPCode(),
                productDTO.getPName(),
                productDTO.getPQty(),
                productDTO.getPAmount()
        );
    }
}
