package org.example.product.service.imp;

import lombok.AllArgsConstructor;
import org.example.product.dto.ProductDTO;
import org.example.product.entity.Product;
import org.example.product.exception.ResourceNotFoundException;
import org.example.product.mapper.ProductMapper;
import org.example.product.repo.ProductRepo;
import org.example.product.service.ProductService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ProductServiceImpl implements ProductService {
    private ProductRepo productRepo;
    @Override
    public ProductDTO createProduct(ProductDTO productDTO) {
        Product product= ProductMapper.mapToProduct(productDTO);
        Product saveProduct= productRepo.save(product);
        return ProductMapper.mapToProductDto(saveProduct);
    }

    @Override
    public ProductDTO getProductById(Long productId) {
        Product product=productRepo.findById(productId)
                .orElseThrow(() ->
                new ResourceNotFoundException("Product Is not exsist with given id :" +productId));
        return ProductMapper.mapToProductDto(product);
    }

    @Override
    public List<ProductDTO> getAllProduct() {
        List<Product> products = productRepo.findAll();
        return products.stream().map(product -> ProductMapper.mapToProductDto(product))
                .collect(Collectors.toList());
    }

    @Override
    public ProductDTO updateProduct(Long productId, ProductDTO updatedProduct) {
        Product product = productRepo.findById(productId).orElseThrow(
                ()-> new ResourceNotFoundException("Product Is not exsist with given id :" +productId)
        );
        product.setPCode(updatedProduct.getPCode());
        product.setPName(updatedProduct.getPName());
        product.setPQty(updatedProduct.getPQty());
        product.setPAmount(updatedProduct.getPAmount());
        Product saveProductobj=productRepo.save(product);
        return ProductMapper.mapToProductDto(saveProductobj);
    }

    @Override
    public Void deleteProduct(Long productId) {
        Product product=productRepo.findById(productId).orElseThrow(
                ()-> new ResourceNotFoundException("Product Is not exsist with given id :" +productId)
        );
        productRepo.deleteById(productId);
        return null;
    }
}
