package com.restaurant_manager.restaurant_manager.controllers;

import com.restaurant_manager.restaurant_manager.models.details.Detail;
import com.restaurant_manager.restaurant_manager.models.details.repository.DetailsRepo;
import com.restaurant_manager.restaurant_manager.models.orders.Order;
import com.restaurant_manager.restaurant_manager.models.orders.orderDTO.OrderDTO;
import com.restaurant_manager.restaurant_manager.models.orders.repository.OrderRepository;
import com.restaurant_manager.restaurant_manager.models.products.Product;
import com.restaurant_manager.restaurant_manager.models.products.ProductDTO;
import com.restaurant_manager.restaurant_manager.models.products.repository.ProductRepository;
import com.restaurant_manager.restaurant_manager.models.reserves.Reserve;
import com.restaurant_manager.restaurant_manager.models.reserves.dto.ReserveDto;
import com.restaurant_manager.restaurant_manager.models.reserves.repository.ReserveRepository;
import com.restaurant_manager.restaurant_manager.models.tables.RestaurantTable;
import com.restaurant_manager.restaurant_manager.models.tables.repository.TableRepository;
import com.restaurant_manager.restaurant_manager.models.users.User;
import com.restaurant_manager.restaurant_manager.models.users.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.*;

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

    @Autowired
    private ReserveRepository reserveRepository;

    @Autowired
    private DetailsRepo detailsRepo;

    // users
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
        if (user.getName() != null || user.getName() != "")
            userToUpdate.setName(user.getName());
        if (user.getLastName() != null || user.getLastName() != "")
            userToUpdate.setLastName(user.getLastName());
        if (user.getEmail() != null || user.getEmail() != "")
            userToUpdate.setEmail(user.getEmail());
        if (user.getPassword() != null || user.getPassword() != "")
            userToUpdate.setPassword(user.getPassword());
        if (user.getRoles() != null || !user.getRoles().isEmpty())
            userToUpdate.setRoles(user.getRoles());
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
    public ResponseEntity<?> getTable(@PathVariable Long id) {
        return ResponseEntity.ok(tableRepository.findById(id));
    }


    @RequestMapping(path = "/tables/add", method = RequestMethod.POST)
    public ResponseEntity<?> addTable(@RequestBody RestaurantTable table) {
        tableRepository.save(table);
        return ResponseEntity.ok(table);
    }

    @RequestMapping(path = "/tables/update/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> updateTable(@RequestBody RestaurantTable table, @PathVariable Long id) {
        tableRepository.findById(id).map(t -> {
            if (table.getId() != 0)
                t.setId((table.getId()));
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
    public ResponseEntity<?> deleteTable(@PathVariable Long id) {
        tableRepository.delete(
                tableRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid table Id:" + id)));
        return ResponseEntity.ok("Table deleted");
    }


    @RequestMapping(path = "/tables/count", method = RequestMethod.GET)
    public ResponseEntity<?> getTableCount() {
        Map<String, Long> map = new HashMap<>();
        map.put("Ocupadas", tableRepository.countByIsAvailable(false));
        map.put("Disponibles", tableRepository.countByIsAvailable(true));
        return ResponseEntity.ok(map);
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
            if (product.getName() != null || !Objects.equals(product.getName(), ""))
                p.setName(product.getName());
            if ((product.getPrice() != 0.0 || product.getPrice() != 0) && product.getPrice() > 0)
                p.setPrice(product.getPrice());
            if (product.getDescription() != null || !Objects.equals(product.getDescription(), ""))
                p.setDescription(product.getDescription());
            if (product.getPreparationTime() != 0 || product.getPreparationTime() != 0.0)
                p.setPreparationTime(product.getPreparationTime());
            if (product.getType() != null || !Objects.equals(product.getType(), ""))
                p.setType(product.getType());
            return productRepository.save(p);
        }).orElseGet(() -> {
            return productRepository.save(product);
        });
        return ResponseEntity.ok("Product updated");
    }

    @DeleteMapping(path = "/products/delete/{name}")
    public ResponseEntity<?> deleteProduct(@PathVariable String name) {
        productRepository.delete(productRepository.findByName(name));
        return ResponseEntity.ok("Product deleted");
    }

    @RequestMapping (path = "/products/delete/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
        productRepository.deleteById(id);
        return ResponseEntity.ok("Product deleted");
    }

    // orders

    @RequestMapping(path = "/orders/all", method = RequestMethod.GET)
    public ResponseEntity<?> getAllOrders() {
        return ResponseEntity.ok(orderRepository.findAll());
    }
    public void orderToOrderDTO(){

    }
    @RequestMapping(path = "/orders/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> getOrder(@PathVariable Long id) {
        return ResponseEntity.ok(orderRepository.findById(id));
    }

    @RequestMapping(path = "/orders/add", method = RequestMethod.POST)
    public ResponseEntity<?> addOrder(@RequestBody OrderDTO orderDto) {
        orderDtoToOrder(orderDto);
        return ResponseEntity.ok("Order added");
    }

//    @RequestMapping(path = "/orders/update/{id}", method = RequestMethod.PUT)
//    public ResponseEntity<?> updateOrder(@RequestBody OrderDTO orderDto, @PathVariable Long id) {
//        Order order = orderDtoToOrder(orderDto);
//        orderRepository.findById(id).map(o -> {
//            if (order.getState() != null || !Objects.equals(order.getState(), ""))
//                o.setState(order.getState());
//            if (order.getReserve() != null)
//                o.setReserve(order.getReserve());
//            if (order.getWorker() != null)
//                o.setWorker(userRepository.findById(order.getWorker().getId()));
//            if (order.getClient() != null)
//                o.setClient(userRepository.findById(order.getClient().getId()));
//            return orderRepository.save(o);
//        }).orElseGet(() -> {
//            return orderRepository.save(order);
//        });
//        return ResponseEntity.ok("Order updated");
//    }

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
        for ( ProductDTO productDTO : orderDTO.getProducts()) {
            Detail detail = new Detail();
            detail.setProduct(productRepository.findById(productDTO.getId()).get());
            detail.setQuantity(productDTO.getQuantity());
            detail.setPrice(detail.getProduct().getPrice());
            total+=detail.getProduct().getPrice()*detail.getQuantity();
            detail.setOrder(savedOrder.getId());
            detailsRepo.save(detail);
        }
        savedOrder.setTotalPrice(total);
        orderRepository.save(savedOrder);
    }

    @DeleteMapping(path = "/orders/delete/{id}")
    public ResponseEntity<?> deleteOrder(@PathVariable Long id) {
        orderRepository.delete(orderRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid order Id:" + id)));
        return ResponseEntity.ok("Order deleted");
    }

    @RequestMapping(path = "/orders/count", method = RequestMethod.GET)
    public ResponseEntity<?> getOrdersCount() {
        Map<String, Long> map = new HashMap<>();
        long active = orderRepository.countByState("Activa");
        map.put("Activas", active);
        map.put("Despachadas", orderRepository.count() - active);
        return ResponseEntity.ok(map);
    }

    // reserves
    @RequestMapping(path = "/reserves/all", method = RequestMethod.GET)
    public ResponseEntity<?> getAllReserves() {
        return ResponseEntity.ok(reserveRepository.findAll());
    }

    @RequestMapping(path = "/reserves/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> getReserve(@PathVariable Long id) {
        return ResponseEntity.ok(reserveRepository.findById(id));
    }

    @RequestMapping(path = "/reserves/f", method = RequestMethod.GET)
    public ResponseEntity<?> getFormattedReserves() {
        List<Reserve> reserves = reserveRepository.findAll();
        List<Map<String, String>> reservesMap = new ArrayList<>();
        reserves.forEach(r -> {
            String hour = r.getReserveDate().getHour() + ":" + r.getReserveDate().getMinute() + ":" + r.getReserveDate().getSecond();
            String date = r.getReserveDate().getDayOfMonth() + "/" + r.getReserveDate().getMonthValue() + "/" + r.getReserveDate().getYear();
            String people = String.valueOf(r.getAmountOfPeople());
            Map<String, String> map = new HashMap<>();
            map.put("id", String.valueOf(r.getId()));
            map.put("hour", hour);
            map.put("date", date);
            map.put("people", people);
            reservesMap.add(map);
        });
        return ResponseEntity.ok(reservesMap);
    }

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

    @DeleteMapping(path = "/reserves/delete/{id}")
    public ResponseEntity<?> deleteReserve(@PathVariable Long id) {
        reserveRepository.delete(reserveRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid reserve Id:" + id)));
        return ResponseEntity.ok("Reserve deleted");
    }

}
