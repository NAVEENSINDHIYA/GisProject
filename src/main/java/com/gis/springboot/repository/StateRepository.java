package com.gis.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gis.springboot.models.state;
@Repository
public interface StateRepository extends JpaRepository<state, Integer> {

	List<state> findAllByOrderByStatenameAsc();

}
