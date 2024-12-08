package com.example.Order.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false,unique = true)
    private Long id;
    @Column(name = "invoice_no")
    private Long invoiceNo;
    @Column(name = "date")
    private String date;
    @Column(name = "bill_amount")
    private Long billAmount;
    @Column(name = "customer_id",nullable = false)
    private Long customerId;

}
