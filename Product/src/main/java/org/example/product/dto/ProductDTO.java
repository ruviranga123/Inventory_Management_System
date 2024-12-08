package org.example.product.dto;

import jakarta.persistence.Id;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Getter
@Setter
public class ProductDTO {
    @Id
    private Long id;
    private String PCode;
    private String PName;
    private Long PQty;
    private Long PAmount;
}
