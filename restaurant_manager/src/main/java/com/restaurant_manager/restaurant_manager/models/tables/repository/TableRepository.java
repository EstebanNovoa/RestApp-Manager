package com.restaurant_manager.restaurant_manager.models.tables.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.restaurant_manager.restaurant_manager.models.tables.RestaurantTable;

import java.util.List;

public interface TableRepository extends JpaRepository<RestaurantTable, Long> {
    RestaurantTable findById(long id);
    long countByIsAvailable(boolean isAvailable);
    List<RestaurantTable>  findAllByIsAvailable(boolean b);
}
