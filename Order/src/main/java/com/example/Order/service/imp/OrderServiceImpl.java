package com.example.Order.service.imp;

import com.example.Order.dto.OrderDTO;
import com.example.Order.entity.Order;
import com.example.Order.mapper.OrderMapper;
import com.example.Order.repo.OrderRepo;
import com.example.Order.service.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class OrderServiceImpl implements OrderService {
    private OrderRepo orderRepo;
    @Override
    public OrderDTO createOrder(OrderDTO orderDTO) {
        Order order = OrderMapper.mapToOrder(orderDTO);
        Order saveOrder=orderRepo.save(order);
        return OrderMapper.mapToOrderDTO(saveOrder);
    }

    @Override
    public List<OrderDTO> getAllOrders() {
        List<Order> orders= orderRepo.findAll();

        return orders.stream().map(order -> OrderMapper.mapToOrderDTO(order))
                .collect(Collectors.toList());
    }
}
