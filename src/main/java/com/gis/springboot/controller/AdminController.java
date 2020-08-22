package com.gis.springboot.controller;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@PreAuthorize("hasAuthority('ROLE_admin')")
public class AdminController {
	@GetMapping("/admin")
	public String admin() {
		return "Admin added succesfully";
	}
	@GetMapping("/admin/list")
	public String adminList() {
		return "Admin added succesfully";
	}
}