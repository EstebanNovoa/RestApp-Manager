package com.restaurant_manager.restaurant_manager.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.restaurant_manager.restaurant_manager.models.orders.repository.OrderRepository;

@Controller
@RequestMapping ("/api/worker")
public class ControllerRoleWorker {
    

    @Autowired
    OrderRepository orderRepository;

    //Orders list
    @RequestMapping ("/orders/list/{id}")
    public ResponseEntity<?> getOrdersList(@PathVariable Long id) {
        return ResponseEntity.ok(orderRepository.findAllByWorker(id));
    }

    @RequestMapping ("/orders/list")
    public ResponseEntity<?> getOrdersList(@RequestBody String email) {
        return ResponseEntity.ok(orderRepository.findAllByWorker(email));
    }


}
