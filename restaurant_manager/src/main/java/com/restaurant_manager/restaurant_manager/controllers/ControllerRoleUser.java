package com.restaurant_manager.restaurant_manager.controllers;

import com.restaurant_manager.restaurant_manager.models.details.Detail;
import com.restaurant_manager.restaurant_manager.models.details.repository.DetailsRepo;
import com.restaurant_manager.restaurant_manager.models.orders.Order;
import com.restaurant_manager.restaurant_manager.models.orders.orderDTO.OrderDTO;
import com.restaurant_manager.restaurant_manager.models.orders.repository.OrderRepository;
import com.restaurant_manager.restaurant_manager.models.products.ProductDTO;
import com.restaurant_manager.restaurant_manager.models.products.repository.ProductRepository;
import com.restaurant_manager.restaurant_manager.models.reserves.Reserve;
import com.restaurant_manager.restaurant_manager.models.reserves.dto.ReserveDto;
import com.restaurant_manager.restaurant_manager.models.reserves.repository.ReserveRepository;
import com.restaurant_manager.restaurant_manager.models.tables.RestaurantTable;
import com.restaurant_manager.restaurant_manager.models.tables.repository.TableRepository;
import com.restaurant_manager.restaurant_manager.models.users.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ControllerRoleUser {
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


    // reserves
    @RequestMapping(value = "/reserves/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> getAllReserves(@PathVariable Long id) {
        return ResponseEntity.ok(reserveRepository.findAllByClient(userRepository.findById(id).get()));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(path = "/reserves/add", method = RequestMethod.POST)
    public ResponseEntity<?> addReserve(@RequestBody ReserveDto reserveDto) {
        Reserve reserve = reserveDtoToReserve(reserveDto);
        reserveRepository.save(reserve);
        return ResponseEntity.ok(reserve);
    }

    public Reserve reserveDtoToReserve(ReserveDto reserveDto) {
        Reserve reserve = new Reserve();
        reserve.setReserveDate(reserveDto.getReserveDate());
        reserve.setIsDispatched(reserveDto.isIsDispatched());
        reserve.setDispatchedDate(reserveDto.getDispatchedDate());
        reserve.setAmountOfPeople(reserveDto.getAmountOfPeople());
        reserve.setClient(userRepository.findById(reserveDto.getClient()));
        return reserve;
    }

    @DeleteMapping(path = "/reserves/delete/{id}/user/{client}")
    public ResponseEntity<?> deleteReserve(@PathVariable Long id, @PathVariable Long client) {
        List<Reserve> reserves = reserveRepository.findAllByClient(userRepository.findById(client).get());
        for (Reserve reserve : reserves) {
            if (reserve.getId().equals(id)) {
                reserveRepository.delete(reserve);
                return ResponseEntity.ok(reserve);
            }
        }
        return ResponseEntity.ok("Reserve not found");
    }

    //tables
    @RequestMapping(path = "/tables", method = RequestMethod.GET)
    public ResponseEntity<?> getTables() {
        return ResponseEntity.ok(tableRepository.findAllByIsAvailable(true));
    }

    @RequestMapping(path = "/tables/{id}", method = RequestMethod.PATCH)
    public ResponseEntity<?> changeTableState(@PathVariable Long id) {
        if (tableRepository.findById(id).get().isAvailable()) {
            tableRepository.findById(id).get().setIsAvailable(false);
        } else {
            return ResponseEntity.badRequest().body("Table is already busy");
        }
        return ResponseEntity.ok(tableRepository.findById(id));
    }


    //orders
    @RequestMapping(path = "/orders/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> getOrders(@PathVariable Long id) {
        return ResponseEntity.ok(orderRepository.findAllByClient(userRepository.findById(id)));
    }


    @RequestMapping(path = "/orders/add", method = RequestMethod.POST)
    public ResponseEntity<?> addOrder(@RequestBody OrderDTO orderDto) {
        orderDtoToOrder(orderDto);
        return ResponseEntity.ok("Order added");
    }

    private void orderDtoToOrder(OrderDTO orderDTO) {
        Order order = new Order();
        System.out.println(order.getId());
        order.setState(orderDTO.getState());
        if (orderDTO.getReserve() != 0)
            order.setReserve(reserveRepository.findById(orderDTO.getReserve()));
        if (orderDTO.getWorker() != 0)
            order.setWorker(userRepository.findById(orderDTO.getWorker()));
        order.setClient(userRepository.findById(orderDTO.getClient()));
        RestaurantTable table = tableRepository.findById(orderDTO.getTable());
        if (table != null) {
            if (table.isAvailable()) {
                order.setTable(table);
                table.setIsAvailable(false);
                tableRepository.save(table);
            }
        }

        Order savedOrder = orderRepository.save(order);
        double total = 0;
        for (ProductDTO productDTO : orderDTO.getProducts()) {
            Detail detail = new Detail();
            detail.setProduct(productRepository.findById(productDTO.getId()).get());
            detail.setQuantity(productDTO.getQuantity());
            detail.setPrice(detail.getProduct().getPrice());
            total += detail.getProduct().getPrice() * detail.getQuantity();
            detail.setOrder(savedOrder.getId());
            detailsRepo.save(detail);
        }
        savedOrder.setTotalPrice(total);
        orderRepository.save(savedOrder);
    }

    @RequestMapping(path = "/orders/{id}/state/{state}", method = RequestMethod.PATCH)
    public ResponseEntity<?> changeStateOrder(@PathVariable Long id, @PathVariable String state) {
        Order order = orderRepository.findById(id).get();
        order.setState(state);
        orderRepository.save(order);
        return ResponseEntity.ok(orderRepository.findById(id));
    }

    @RequestMapping(path = "/orders/delete/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteOrder(@PathVariable Long id) {
        Order order = orderRepository.findById(id).get();
        orderRepository.delete(order);
        return ResponseEntity.ok("Order deleted");
    }

    //products
    @RequestMapping(path = "/products", method = RequestMethod.GET)
    public ResponseEntity<?> getProducts() {
        return ResponseEntity.ok(productRepository.findAll());
    }
}
