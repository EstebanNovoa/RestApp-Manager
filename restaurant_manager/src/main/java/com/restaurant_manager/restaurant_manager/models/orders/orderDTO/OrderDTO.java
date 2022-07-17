package com.restaurant_manager.restaurant_manager.models.orders.orderDTO;

import java.util.List;

import com.restaurant_manager.restaurant_manager.models.products.Product;

public class OrderDTO {
    private long id;
    private String state;
    private List<Product> products;
    private long client;
    private long worker;
    private long reserve;

    public OrderDTO() {
    }

    public OrderDTO(long id, String state, List<Product> products, long client, long worker, long reserve) {
        this.id = id;
        this.state = state;
        this.products = products;
        this.client = client;
        this.worker = worker;
        this.reserve = reserve;
    }

    /**
     * @return long return the id
     */
    public long getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(long id) {
        this.id = id;
    }

    /**
     * @return String return the state
     */
    public String getState() {
        return state;
    }

    /**
     * @param state the state to set
     */
    public void setState(String state) {
        this.state = state;
    }

    /**
     * @return List<Product> return the products
     */
    public List<Product> getProducts() {
        return products;
    }

    /**
     * @param products the products to set
     */
    public void setProducts(List<Product> products) {
        this.products = products;
    }

    /**
     * @return long return the client
     */
    public long getClient() {
        return client;
    }

    /**
     * @param client the client to set
     */
    public void setClient(long client) {
        this.client = client;
    }

    /**
     * @return long return the worker
     */
    public long getWorker() {
        return worker;
    }

    /**
     * @param worker the worker to set
     */
    public void setWorker(long worker) {
        this.worker = worker;
    }

    /**
     * @return long return the reserve
     */
    public long getReserve() {
        return reserve;
    }

    /**
     * @param reserve the reserve to set
     */
    public void setReserve(long reserve) {
        this.reserve = reserve;
    }

}
