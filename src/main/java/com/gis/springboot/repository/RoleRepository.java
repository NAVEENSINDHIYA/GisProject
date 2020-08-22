package com.gis.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gis.springboot.models.Role;

public interface RoleRepository extends JpaRepository<Role, Integer> {

}