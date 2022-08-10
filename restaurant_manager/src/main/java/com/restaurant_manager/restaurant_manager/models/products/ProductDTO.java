package com.restaurant_manager.restaurant_manager.models.products;

public class ProductDTO {

    private long id;
    private int quantity;

    public ProductDTO() {
    }

    public ProductDTO(long id, int quantity) {
        this.id = id;
        this.quantity = quantity;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
