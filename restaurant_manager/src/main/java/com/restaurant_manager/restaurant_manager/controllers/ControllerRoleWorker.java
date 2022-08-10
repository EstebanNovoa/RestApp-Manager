package com.restaurant_manager.restaurant_manager.controllers;

import com.restaurant_manager.restaurant_manager.models.details.repository.DetailsRepo;
import com.restaurant_manager.restaurant_manager.models.orders.Order;
import com.restaurant_manager.restaurant_manager.models.products.repository.ProductRepository;
import com.restaurant_manager.restaurant_manager.models.reserves.repository.ReserveRepository;
import com.restaurant_manager.restaurant_manager.models.tables.repository.TableRepository;
import com.restaurant_manager.restaurant_manager.models.users.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.restaurant_manager.restaurant_manager.models.orders.repository.OrderRepository;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping ("/api/worker")
public class ControllerRoleWorker {

    @Autowired
    private TableRepository tableRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    ReserveRepository reserveRepository;

    @Autowired
    private DetailsRepo detailsRepo;


    //Orders list
    @RequestMapping ("/orders/list/{id}")
    public ResponseEntity<?> getOrdersList(@PathVariable Long id) {
        return ResponseEntity.ok(orderRepository.findAllByWorker(userRepository.findById(id)));
    }

    @RequestMapping("/orders/{id}/state/{state}")
    public ResponseEntity<?> changeStateOrder(@PathVariable Long id, @PathVariable String state) {
        Order order = orderRepository.findById(id).get();
        order.setState(state);
        orderRepository.save(order);
        return ResponseEntity.ok(orderRepository.findById(id));
    }

    //tables
    @RequestMapping(path = "/tables", method = RequestMethod.GET)
    public ResponseEntity<?> getTables() {
        return ResponseEntity.ok(tableRepository.findAllByIsAvailable(true));
    }

    //products
    @RequestMapping(path = "/products", method = RequestMethod.GET)
    public ResponseEntity<?> getProducts() {
        return ResponseEntity.ok(productRepository.findAll());
    }
}
