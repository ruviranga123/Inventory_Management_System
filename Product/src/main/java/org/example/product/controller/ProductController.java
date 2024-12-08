package org.example.product.controller;

import lombok.AllArgsConstructor;
import org.example.product.dto.ProductDTO;
import org.example.product.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin("*")
@AllArgsConstructor
@RequestMapping("/api/products")
public class ProductController {
    private ProductService productService;
    @PostMapping
        public ResponseEntity<ProductDTO> createProduct(@RequestBody ProductDTO productDTO){
        ProductDTO saveProduct = productService.createProduct(productDTO);
        return new ResponseEntity<>(saveProduct, HttpStatus.CREATED);
        }
        @GetMapping("{id}")
        public ResponseEntity<ProductDTO> getProductById(@PathVariable("id") Long productId){
          ProductDTO productDTO=productService.getProductById(productId);
          return ResponseEntity.ok(productDTO);
        }
        @GetMapping
        public ResponseEntity<List<ProductDTO>> getAllProduct(){
         List<ProductDTO> products= productService.getAllProduct();
         return ResponseEntity.ok(products);
        }
        @PutMapping("{id}")
        public  ResponseEntity<ProductDTO> updateProduct(@PathVariable("id") Long productId,@RequestBody ProductDTO updateProduct){
           ProductDTO productDTO =productService.updateProduct(productId,updateProduct);
           return  ResponseEntity.ok(productDTO);
        }
        @DeleteMapping("{id}")
        public ResponseEntity<String> deleteProduct(@PathVariable("id") Long productId){
        productService.deleteProduct(productId);
        return ResponseEntity.ok("Product delete successfuly");
        }

}
