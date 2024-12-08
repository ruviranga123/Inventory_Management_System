package com.example.Order.service;

import com.example.Order.dto.OrderDTO;

import java.util.List;

public interface OrderService {
    OrderDTO createOrder(OrderDTO orderDTO);
    List<OrderDTO>getAllOrders();
}
