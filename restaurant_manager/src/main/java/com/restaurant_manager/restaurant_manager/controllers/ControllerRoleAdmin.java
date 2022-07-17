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

import com.restaurant_manager.restaurant_manager.models.products.Product;
import com.restaurant_manager.restaurant_manager.models.products.repository.ProductRepository;
import com.restaurant_manager.restaurant_manager.models.tables.RestaurantTable;
import com.restaurant_manager.restaurant_manager.models.tables.repository.TableRepository;

@Controller
@RequestMapping("/api/admin")
public class ControllerRoleAdmin {

    @Autowired
    private TableRepository tableRepository;

    @Autowired
    private ProductRepository productRepository;

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

    
}
