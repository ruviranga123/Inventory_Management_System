package com.example.Order.controller;

import com.example.Order.dto.OrderDTO;
import com.example.Order.service.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("/api/orders")
public class OrderController {
    private OrderService orderService;
    @PostMapping
    public ResponseEntity<OrderDTO> createOrder(@RequestBody OrderDTO orderDTO){
        OrderDTO saveOrder =orderService.createOrder(orderDTO);
        return new ResponseEntity<>(saveOrder, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<OrderDTO>> getAllOrders(){
        List<OrderDTO> orders= orderService.getAllOrders();
        return ResponseEntity.ok(orders);
    }
}
