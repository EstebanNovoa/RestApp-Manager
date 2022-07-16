package com.restaurant_manager.restaurant_manager.models.bills;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "bills")
public class Bills {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "total_price", nullable = false, unique = false)
    private double totalPrice;

    @Column(name = "date", nullable = false, unique = false)
    private Date date;

    @Column(name = "order_id", nullable = false, unique = false)
    private long orderId;

    @Column(name = "product_id", nullable = false, unique = false)
    private long productId;

    public Bills() {
    }

    public Bills(long id, double totalPrice, Date date, long orderId, long productId) {
        this.id = id;
        this.totalPrice = totalPrice;
        this.date = date;
        this.orderId = orderId;
        this.productId = productId;
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
     * @return double return the totalPrice
     */
    public double getTotalPrice() {
        return totalPrice;
    }

    /**
     * @param totalPrice the totalPrice to set
     */
    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    /**
     * @return Date return the date
     */
    public Date getDate() {
        return date;
    }

    /**
     * @param date the date to set
     */
    public void setDate(Date date) {
        this.date = date;
    }

    /**
     * @return long return the orderId
     */
    public long getOrderId() {
        return orderId;
    }

    /**
     * @param orderId the orderId to set
     */
    public void setOrderId(long orderId) {
        this.orderId = orderId;
    }

    /**
     * @return long return the productId
     */
    public long getProductId() {
        return productId;
    }

    /**
     * @param productId the productId to set
     */
    public void setProductId(long productId) {
        this.productId = productId;
    }

}
