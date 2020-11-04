package com.gis.springboot.controller;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.gis.springboot.models.*;
import com.gis.springboot.repository.DistrictRepository;
import com.gis.springboot.repository.StateRepository;
import com.gis.springboot.repository.TalukaRepository;
import com.gis.springboot.repository.villageRepository;

@RestController
@PreAuthorize("hasRole('admin')")
public class ApiController {
	
	@Autowired
	private StateRepository staterepo;
	
	@Autowired
	private DistrictRepository districtrepo;
	
	@Autowired
	private TalukaRepository talukarepo;
	
	@Autowired
	private villageRepository villagerepo;
	
	@RequestMapping(value="/getstates", method=RequestMethod.POST)
	public List<state> getState() {
		
		return staterepo.findAllByOrderByStatenameAsc();
				//.stream()
				//.sorted(Comparator.comparing(state::getStatename))
				//.collect(Collectors.toList());
	}
	
	@RequestMapping(value="/getdistricts", method=RequestMethod.POST)
	public List<district> getDistrict(@RequestBody district district)
	{
		return  districtrepo.findByStatecodeOrderByDistrictnameAsc(district.getStatecode());
	}
	@RequestMapping(value="/gettalukas", method=RequestMethod.POST)
	public List<taluka> getTaluka(@RequestBody taluka taluka)
	{
		return  talukarepo.findByDistrictcodeOrderByTalukanameAsc(taluka.getDistrictcode());
	}
	@RequestMapping(value="/getvillage", method=RequestMethod.POST)
	public List<village> getVillage(@RequestBody village village)
	{
		
		return  villagerepo.findByTalukacodeOrderByVillagenameAsc(village.getTalukacode());
	}

}
