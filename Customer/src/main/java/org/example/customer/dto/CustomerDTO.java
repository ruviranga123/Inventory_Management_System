package org.example.customer.dto;


import jakarta.persistence.Id;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
//@Getter
//@Setter
public class CustomerDTO {

    @Id
    private Long id;
    private String name;
    private String address;
    private Long tele;
}
