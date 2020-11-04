package com.gis.springboot.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;

import com.gis.springboot.models.geom;
import com.gis.springboot.repository.geomRepository;



@Controller
@PreAuthorize("hasRole('admin')")
public class AdminController {
	
	@Autowired
	private geomRepository grepo;
	
	
	 private String server = "10.247.102.63";

	    private int port = 8080;

	    @RequestMapping("/wms")
	    @ResponseBody
	    public String mirrorRest(@RequestBody String body, HttpMethod method, HttpServletRequest request, HttpServletResponse response) throws URISyntaxException {
	        // System.out.println("sadasdsadhsdsd"+request.getQueryString());
	        // String temp = new String(request.getQueryString());
	        String req = request.getQueryString()
	            .replace("%2C", ",")
	            .replace("%3A", ":")
	            .replace("%2F", "/")
	            .replace("%3D", "=")
	            .replace("%5B", "[")
	            .replace("%5D", "]")
	            .replace("%27", "'")
	            .replace("%20", " ")
	            .replace("%3C", "<")
	            .replace("%3E", ">");

	        URI uri = new URI("http", null, server, port, "/geoserver/cite/wms", req, null);

	        // System.out.println(uri);
	        RestTemplate restTemplate = new RestTemplate();
	        ResponseEntity<String> responseEntity = restTemplate.exchange(uri, method, new HttpEntity<String>(body), String.class);

	        return responseEntity.getBody();
	    }
	
	
	
	@GetMapping("/admin")
	public String admin() {
		return "index";
	}
	@GetMapping("/addgeom")
	public String addgeom() {
		return "addgeom";
	}
	@RequestMapping(value = "/savegeomform")
	@ResponseBody
	public ModelAndView SaveAddGeom( geom geom,ModelMap model) throws Exception {
		
	
		if(geom.gid!=0)
		{
			geom.setGid(geom.gid);
			grepo.save(geom);
			
		}
		else
		{
			grepo.save(geom);
		}
		
	
		
		
		model.put("msg", "Data saved successfully!!!     Your Record Id is :  "+geom.getGid());
		return new ModelAndView("redirect:addgeom");
	}
	

	
	
}