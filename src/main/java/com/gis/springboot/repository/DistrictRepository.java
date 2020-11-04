package com.gis.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gis.springboot.models.district;

@Repository
public interface DistrictRepository extends JpaRepository<district, Integer>{

	



	List<district> findByStatecodeOrderByDistrictnameAsc(String statecode);

}
