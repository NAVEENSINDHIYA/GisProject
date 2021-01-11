package com.gis.springboot.controller;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.gis.springboot.models.*;
import com.gis.springboot.repository.DistrictRepository;
import com.gis.springboot.repository.StateRepository;
import com.gis.springboot.repository.TalukaRepository;
import com.gis.springboot.repository.geomRepository;
import com.gis.springboot.repository.villageRepository;

@RestController
@PreAuthorize("hasRole('admin')")
public class ApiController {

	@Autowired
	private geomRepository grepo;

	@RequestMapping(path = "/findAllgeom", method = RequestMethod.POST)

	public List<geom> findAll() {
		return grepo.findAll();
	}

	@PostMapping("/GeomDeletedById/{id}")
	public List<geom> GeomDeletedById(@PathVariable("id") int id) {

		grepo.deleteById(id);
		return grepo.findAll();
	}

}
