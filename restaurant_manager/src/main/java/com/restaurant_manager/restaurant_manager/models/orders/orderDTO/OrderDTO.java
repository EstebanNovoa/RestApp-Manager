package com.restaurant_manager.restaurant_manager.models.orders.orderDTO;

import com.restaurant_manager.restaurant_manager.models.products.ProductDTO;

import java.util.List;

public class OrderDTO {
    private long id;
    private String state;
    private long client;
    private long worker;
    private long reserve;

    private long table;

    private List<ProductDTO> products;

    public OrderDTO() {
    }

    public OrderDTO(long id, String state, long client, long worker, long reserve, long table, List<ProductDTO> products) {
        this.id = id;
        this.state = state;
        this.client = client;
        this.worker = worker;
        this.reserve = reserve;
        this.table = table;
        this.products = products;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public long getClient() {
        return client;
    }

    public void setClient(long client) {
        this.client = client;
    }

    public long getWorker() {
        return worker;
    }

    public void setWorker(long worker) {
        this.worker = worker;
    }

    public long getReserve() {
        return reserve;
    }

    public void setReserve(long reserve) {
        this.reserve = reserve;
    }

    public long getTable() {
        return table;
    }

    public void setTable(long table) {
        this.table = table;
    }

    public List<ProductDTO> getProducts() {
        return products;
    }

    public void setProducts(List<ProductDTO> products) {
        this.products = products;
    }
}