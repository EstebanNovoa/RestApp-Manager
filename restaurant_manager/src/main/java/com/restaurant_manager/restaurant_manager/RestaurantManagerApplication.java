package com.restaurant_manager.restaurant_manager;

import com.restaurant_manager.restaurant_manager.models.users.Role;
import com.restaurant_manager.restaurant_manager.models.users.repository.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class RestaurantManagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestaurantManagerApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedOrigins("*").allowedMethods("*").allowedHeaders("*");
			}
		};
	}

	@Bean
	CommandLineRunner run(RoleRepository roleRepository) {
		return args -> {
			if (roleRepository.findByName("ROLE_ADMIN") == null) {
				roleRepository.save(new Role("ROLE_ADMIN"));
			}
			if (roleRepository.findByName("ROLE_USER") == null) {
				roleRepository.save(new Role("ROLE_USER"));
			}
			if (roleRepository.findByName("ROLE_WORKER") == null) {
				roleRepository.save(new Role("ROLE_WORKER"));
			}
		};
	}
}
