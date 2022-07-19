package com.restaurant_manager.restaurant_manager.models.reserves;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.restaurant_manager.restaurant_manager.models.users.User;

@Entity
@Table(name = "reserves")
public class Reserve {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "reserve_date", nullable = false, unique = false)
    private Date reserveDate;

    @Column(name = "dispatched", nullable = false, unique = false)
    private boolean isDispatched;

    @Column(name = "dispatched_date", nullable = true, unique = false)
    private Date dispatchedDate;

    @Column(name = "amount_of_people", nullable = false, unique = false)
    private int amountOfPeople;

    @ManyToOne
    @JoinColumn(name = "client_id", referencedColumnName = "id")
    private User client;

    public Reserve() {
    }

    public Reserve(Date reserveDate, boolean isDispatched, Date dispatchedDate, int amountOfPeople, User client) {
        this.reserveDate = reserveDate;
        this.isDispatched = isDispatched;
        this.dispatchedDate = dispatchedDate;
        this.amountOfPeople = amountOfPeople;
        this.client = client;
    }

    public Reserve(Date reserveDate, boolean isDispatched, int amountOfPeople) {
        this.reserveDate = reserveDate;
        this.isDispatched = isDispatched;
        this.amountOfPeople = amountOfPeople;
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
     * @return Date return the reserveDate
     */
    public Date getReserveDate() {
        return reserveDate;
    }

    /**
     * @param reserveDate the reserveDate to set
     */
    public void setReserveDate(Date reserveDate) {
        this.reserveDate = reserveDate;
    }

    /**
     * @return boolean return the isDispatched
     */
    public boolean isIsDispatched() {
        return isDispatched;
    }

    /**
     * @param isDispatched the isDispatched to set
     */
    public void setIsDispatched(boolean isDispatched) {
        this.isDispatched = isDispatched;
    }

    /**
     * @return Date return the dispatchedDate
     */
    public Date getDispatchedDate() {
        return dispatchedDate;
    }

    /**
     * @param dispatchedDate the dispatchedDate to set
     */
    public void setDispatchedDate(Date dispatchedDate) {
        this.dispatchedDate = dispatchedDate;
    }

    /**
     * @return int return the amountOfPeople
     */
    public int getAmountOfPeople() {
        return amountOfPeople;
    }

    /**
     * @param amountOfPeople the amountOfPeople to set
     */
    public void setAmountOfPeople(int amountOfPeople) {
        this.amountOfPeople = amountOfPeople;
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

}
