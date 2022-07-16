package com.restaurant_manager.restaurant_manager.models.tables;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tables")
public class RestaurantTable {
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "table_number", nullable = false, unique = false)
    private int tableNumber;

    @Column(name = "capacity", nullable = false, unique = false, length = 2)
    private int capacity;

    @Column(name = "isAvailable", nullable = false, unique = false)
    private boolean isAvailable;

    public RestaurantTable() {
    }

    public RestaurantTable(int id, int capacity, boolean isAvailable) {
        this.id = id;
        this.capacity = capacity;
        this.isAvailable = isAvailable;
    }

   


    /**
     * @return int return the id
     */
    public int getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(int id) {
        this.id = id;
    }

    /**
     * @return int return the tableNumber
     */
    public int getTableNumber() {
        return tableNumber;
    }

    /**
     * @param tableNumber the tableNumber to set
     */
    public void setTableNumber(int tableNumber) {
        this.tableNumber = tableNumber;
    }

    /**
     * @return int return the capacity
     */
    public int getCapacity() {
        return capacity;
    }

    /**
     * @param capacity the capacity to set
     */
    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    /**
     * @return boolean return the isAvailable
     */
    public boolean isAvailable() {
        return isAvailable;
    }

    /**
     * @param isAvailable the isAvailable to set
     */
    public void setIsAvailable(boolean isAvailable) {
        this.isAvailable = isAvailable;
    }

}
