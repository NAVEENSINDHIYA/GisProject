package com.gis.springboot.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@PreAuthorize("hasRole('admin')")
public class AdminController {
	@GetMapping("/admin")
	public String admin() {
		return "index";
	}
	
}