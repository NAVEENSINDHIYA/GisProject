package com.gis.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gis.springboot.models.User;

public interface UserRepository extends JpaRepository<User, Integer> {

	User findByUsername(String username);

}