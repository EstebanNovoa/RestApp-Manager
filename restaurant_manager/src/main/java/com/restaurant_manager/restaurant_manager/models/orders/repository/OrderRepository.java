package com.restaurant_manager.restaurant_manager.models.orders.repository;

import java.util.List;
import java.util.Optional;

import com.restaurant_manager.restaurant_manager.models.users.User;
import org.springframework.data.jpa.repository.JpaRepository;

import com.restaurant_manager.restaurant_manager.models.orders.Order;

public interface OrderRepository extends JpaRepository<Order,Long> {

    long countByState(String state);

    List<Order> findAllByWorker(Optional<User> worker);

    List<Order> findAllByClient(Optional<User> user);
}
