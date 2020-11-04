package com.gis.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gis.springboot.models.geom;

public interface geomRepository extends JpaRepository<geom, Integer>{

}
