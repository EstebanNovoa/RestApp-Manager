package com.restaurant_manager.restaurant_manager.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.restaurant_manager.restaurant_manager.models.orders.Order;
import com.restaurant_manager.restaurant_manager.models.orders.orderDTO.OrderDTO;
import com.restaurant_manager.restaurant_manager.models.orders.repository.OrderRepository;
import com.restaurant_manager.restaurant_manager.models.products.Product;
import com.restaurant_manager.restaurant_manager.models.products.repository.ProductRepository;
import com.restaurant_manager.restaurant_manager.models.reserves.repository.ReserveRepository;
import com.restaurant_manager.restaurant_manager.models.tables.RestaurantTable;
import com.restaurant_manager.restaurant_manager.models.tables.repository.TableRepository;
import com.restaurant_manager.restaurant_manager.models.users.User;
import com.restaurant_manager.restaurant_manager.models.users.repository.UserRepository;

@Controller
@RequestMapping("/api/admin")
public class ControllerRoleAdmin {

    @Autowired
    private TableRepository tableRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired ReserveRepository reserveRepository;

    //users
    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public ResponseEntity<?> getUsers() {
        return ResponseEntity.ok(userRepository.findAll());
    }

    @RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> getUser(@PathVariable Long id) {
        return ResponseEntity.ok(userRepository.findById(id));
    }

    @RequestMapping(value = "/users", method = RequestMethod.POST)
    public ResponseEntity<?> createUser(@RequestBody User user) {
        return ResponseEntity.ok(userRepository.save(user));
    }

    @RequestMapping(value = "/users/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody User user) {
        User userToUpdate = userRepository.findById(id).get();
        if(user.getName()!=null||user.getName()!="")userToUpdate.setName(user.getName());
        if(user.getLastName()!=null||user.getLastName()!="")userToUpdate.setLastName(user.getLastName());
        if(user.getEmail()!=null|| user.getEmail()!="")userToUpdate.setEmail(user.getEmail());
        if(user.getPassword()!=null|| user.getPassword()!="")userToUpdate.setPassword(user.getPassword());
        if(user.getRoles()!=null|| !user.getRoles().isEmpty())userToUpdate.setRoles(user.getRoles());
        return ResponseEntity.ok(userRepository.save(userToUpdate));
    }

    @RequestMapping(value = "/users/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
        return ResponseEntity.ok("User deleted");
    }

    // tables

    @GetMapping("/tables")
    public ResponseEntity<?> getTables() {
        return ResponseEntity.ok(tableRepository.findAll());
    }

    @RequestMapping(path = "/tables/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> getTable(@RequestBody RestaurantTable table) {
        return ResponseEntity.ok(tableRepository.findByTableNumber(table.getTableNumber()));
    }

    @RequestMapping(path = "/tables/add", method = RequestMethod.POST)
    public ResponseEntity<?> addTable(@RequestBody RestaurantTable table) {
        tableRepository.save(table);
        return ResponseEntity.ok(table);
    }

    @RequestMapping(path = "/tables/update/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> updateTable(@RequestBody RestaurantTable table, @PathVariable int id) {
        tableRepository.findById(id).map(t -> {
            if (table.getTableNumber() != 0)
                t.setTableNumber(table.getTableNumber());
            if (table.getCapacity() != 0)
                t.setCapacity(table.getCapacity());
            if (table.isAvailable() != t.isAvailable())
                t.setIsAvailable(table.isAvailable());
            return tableRepository.save(t);
        }).orElseGet(() -> {
            return tableRepository.save(table);
        });
        return ResponseEntity.ok("Table updated");
    }

    @DeleteMapping("/tables/delete/{id}")
    public ResponseEntity<?> deleteTable(@PathVariable int id) {
        tableRepository.delete(
                tableRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid table Id:" + id)));
        return ResponseEntity.ok("Table deleted");
    }

    // products

    @RequestMapping(path = "/products", method = RequestMethod.GET)
    public ResponseEntity<?> getProducts() {
        return ResponseEntity.ok(productRepository.findAll());
    }

    @RequestMapping(path = "/products/get/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> getProduct(@PathVariable Long id) {
        return ResponseEntity.ok(productRepository.findById(id));
    }

    @RequestMapping(path = "/products/add", method = RequestMethod.POST)
    public ResponseEntity<?> addProduct(@RequestBody Product product) {
        productRepository.save(product);
        return ResponseEntity.ok(product);
    }

    @PutMapping("/products/update/{id}")
    public ResponseEntity<?> updateProduct(@RequestBody Product product, @PathVariable Long id) {
        productRepository.findById(id).map(p -> {
            if (product.getName() != null || product.getName() != "")
                p.setName(product.getName());
            if ((product.getPrice() != 0.0 || product.getPrice() != 0) && product.getPrice() > 0)
                p.setPrice(product.getPrice());
            if (product.getDescription() != null || product.getDescription() != "")
                p.setDescription(product.getDescription());
            if (product.getPreparationTime() != 0 || product.getPreparationTime() != 0.0)
                p.setPreparationTime(product.getPreparationTime());
            if (product.getType() != null || product.getType() != "")
                p.setType(product.getType());
            return productRepository.save(p);
        }).orElseGet(() -> {
            return productRepository.save(product);
        });
        return ResponseEntity.ok("Product updated");
    }

    @DeleteMapping(path = "/products/delete/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
        productRepository.delete(productRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid product Id:" + id)));
        return ResponseEntity.ok("Product deleted");
    }

    // orders

    @RequestMapping (path = "/orders/all", method = RequestMethod.GET)
    public ResponseEntity<?> getAllOrders(){
        return ResponseEntity.ok(orderRepository.findAll());
    }

    @RequestMapping (path = "/orders/{id}" , method = RequestMethod.GET)
    public ResponseEntity<?> getOrder(@PathVariable Long id){
        return ResponseEntity.ok(orderRepository.findById(id));
    }

    @RequestMapping (path = "/orders/add", method = RequestMethod.POST)
    public ResponseEntity<?> addOrder(@RequestBody Order order){
        orderRepository.save(order);
        return ResponseEntity.ok(order);
    }

    @RequestMapping (path = "/orders/update/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> updateOrder(@RequestBody OrderDTO order, @PathVariable Long id){
        orderRepository.findById(id).map(o -> {
            if (order.getState() != null || order.getState() != "")
                o.setState(order.getState());
            if (order.getProducts().size() != 0)
                o.setProducts(order.getProducts());
            if (order.getReserve() > 0)
                o.setReserve(reserveRepository.findById(order.getReserve()));
            if (order.getWorker() > 0)
                o.setWorker(userRepository.findById(order.getWorker()));
            if (order.getClient() > 0)
                o.setClient(userRepository.findById(order.getClient()));
            return orderRepository.save(o);
        }).orElseGet(() -> {
            return orderRepository.save(orderDtoToOrder(order));
        });
        return ResponseEntity.ok("Order updated");
    }

    private Order orderDtoToOrder(OrderDTO order) {
        Order o = new Order();
        return null;
    }
}
