package org.example.customer.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
//@Getter
//@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name="cust")

public class Customer {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, unique = true)
    private Long id;
    @Column(name="name" ,nullable = false)
    private String name;
    @Column(name ="adress", nullable = false)
    private String address;
    @Column(name="tel",nullable = false)
    private Long tele;


}
