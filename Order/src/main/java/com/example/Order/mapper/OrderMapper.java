package com.example.Order.mapper;

import com.example.Order.dto.OrderDTO;
import com.example.Order.entity.Order;

public class OrderMapper {
    public static OrderDTO mapToOrderDTO(Order order) {
        return new OrderDTO(
                order.getId(),
                order.getInvoiceNo(),
                order.getDate(),
                order.getBillAmount(),
                order.getCustomerId()
        );
    }
        public static Order mapToOrder(OrderDTO orderDTO){
           return new Order(
                   orderDTO.getId(),
                   orderDTO.getInvoiceNo(),
                   orderDTO.getDate(),
                   orderDTO.getBillAmount(),
                   orderDTO.getCustomerId()
           );
        }

}
