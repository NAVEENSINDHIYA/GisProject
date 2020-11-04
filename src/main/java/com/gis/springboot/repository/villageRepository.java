package com.gis.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gis.springboot.models.taluka;
import com.gis.springboot.models.village;

public interface villageRepository extends JpaRepository<village, Integer> {

	

	List<village> findByTalukacodeOrderByVillagenameAsc(String talukacode);




}
