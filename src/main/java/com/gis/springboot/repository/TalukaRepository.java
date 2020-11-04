package com.gis.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gis.springboot.models.district;
import com.gis.springboot.models.taluka;

public interface TalukaRepository extends JpaRepository<taluka, Integer>  {



	List<taluka> findByDistrictcodeOrderByTalukanameAsc(String districtcode);

}
