package org.example.product.entity;


import jakarta.persistence.*;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@Table(name="product")
@NoArgsConstructor
@AllArgsConstructor
@Data
//@Getter
//@Setter
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    @Column(nullable = false,unique = true)
    private Long id;
    @Column(name ="pcode",nullable = false)
    private String PCode;
    @Column(name ="pname",nullable = false)
    private String PName;
    @Column(name ="pqty",nullable = false)
    private Long PQty;
    @Column(name ="pamount",nullable = false)
    private Long PAmount;
}
