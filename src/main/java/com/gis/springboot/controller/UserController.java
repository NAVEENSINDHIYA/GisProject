package com.gis.springboot.controller;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@PreAuthorize("hasAuthority('ROLE_user')")
public class UserController {
	@GetMapping("/user")
	public String user() {
		return "user";
	}	
}