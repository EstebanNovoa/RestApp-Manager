package com.restaurant_manager.restaurant_manager.models.details.repository;

import com.restaurant_manager.restaurant_manager.models.details.Detail;
import org.springframework.data.jpa.repository.JpaRepository;


public interface DetailsRepo extends JpaRepository<Detail, Long> {

}
