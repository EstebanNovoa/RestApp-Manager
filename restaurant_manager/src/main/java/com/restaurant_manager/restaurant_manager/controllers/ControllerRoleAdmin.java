package com.restaurant_manager.restaurant_manager.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.restaurant_manager.restaurant_manager.models.tables.RestaurantTable;
import com.restaurant_manager.restaurant_manager.models.tables.repository.TableRepository;

@Controller
@RequestMapping ("/api/admin")
public class ControllerRoleAdmin {
    
    @Autowired
    private TableRepository tableRepository;

    @GetMapping ("/tables")
    public ResponseEntity<?> getTables() {
        return ResponseEntity.ok(tableRepository.findAll());
    }
    
    @RequestMapping ("/tables/get")
    public ResponseEntity<?> getTable(@RequestBody RestaurantTable table) {
        return ResponseEntity.ok(tableRepository.findByTableNumber(table.getTableNumber()));
    }

    @RequestMapping ("/tables/add")
    public ResponseEntity<?> addTable(@RequestBody RestaurantTable table) {
        tableRepository.save(table);
        return ResponseEntity.ok(table);
    }

    @RequestMapping ("/tables/update/{id}")
    public ResponseEntity<?> updateTable(@RequestBody RestaurantTable table, @PathVariable int id) {
        tableRepository.findById(id).map(t -> {
            t.setTableNumber(table.getTableNumber());
            t.setCapacity(table.getCapacity());
            t.setIsAvailable(table.isAvailable());
            return tableRepository.save(t);
        }).orElseGet(() -> {
            return tableRepository.save(table);
        });
        return ResponseEntity.ok("Table updated");
    }

    @DeleteMapping ("/tables/delete/{id}")
    public ResponseEntity<?> deleteTable(@PathVariable int id) {
        tableRepository.delete(tableRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid table Id:" + id)));
        return ResponseEntity.ok("Table deleted");
    }
}
