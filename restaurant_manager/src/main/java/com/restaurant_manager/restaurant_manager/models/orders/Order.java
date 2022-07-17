package com.restaurant_manager.restaurant_manager.models.orders;

import java.util.List;
import java.util.Optional;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.restaurant_manager.restaurant_manager.models.products.Product;
import com.restaurant_manager.restaurant_manager.models.reserves.Reserve;
import com.restaurant_manager.restaurant_manager.models.users.User;


@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "state", nullable = false, unique = false)
    private String state;

    @ManyToMany
    @JoinTable(name = "bills", joinColumns = @JoinColumn(name = "order_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "product_id", referencedColumnName = "id"))
    private List<Product> products;

    @ManyToOne
    @JoinColumn(name = "client_id", referencedColumnName = "id")
    private User client;

    @ManyToOne
    @JoinColumn(name = "worker_id", referencedColumnName = "id")
    private User worker;

    @ManyToOne
    @JoinColumn(name = "reserve_id", referencedColumnName = "id")
    private Reserve reserve;

    public Order() {
    }

    public Order(String state, List<Product> products, User client, User worker, Reserve reserve) {
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
     * @return User return the client
     */
    public User getClient() {
        return client;
    }

    /**
     * @param client the client to set
     */
    public void setClient(User client) {
        this.client = client;
    }

    /**
     * @return User return the worker
     */
    public User getWorker() {
        return worker;
    }

    /**
     * @param worker the worker to set
     */
    public void setWorker(User worker) {
        this.worker = worker;
    }

    /**
     * @return Reserve return the reserve
     */
    public Reserve getReserve() {
        return reserve;
    }

    /**
     * @param reserve the reserve to set
     */
    public void setReserve(Reserve reserve) {
        this.reserve = reserve;
    }

}
