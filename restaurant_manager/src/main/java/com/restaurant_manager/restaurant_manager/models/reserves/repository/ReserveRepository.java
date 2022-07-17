package com.restaurant_manager.restaurant_manager.models.reserves.repository;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;

import com.restaurant_manager.restaurant_manager.models.reserves.Reserve;

public interface ReserveRepository extends JpaRepository<Reserve, Long> {

    Reserve findById(long id);
    Reserve findByReserveDate(Date reserveDate);
    Reserve findByDispatchedReserveDate(Date dispatchedReserveDate);
}
