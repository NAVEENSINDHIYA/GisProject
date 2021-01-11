package com.gis.springboot.controller;

import java.util.HashSet;
import java.util.Map;

import com.gis.springboot.models.Role;
import com.gis.springboot.models.User;
import com.gis.springboot.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LoginController {
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

	@RequestMapping("/")
    public String Default() {
        return "login";
    }
    @RequestMapping("/login")
    public String login() {
        return "login";
    }
	@RequestMapping("/logout")
    public String logout() {
		
        return "login";
    }

    @RequestMapping(value = "/register", method = RequestMethod.GET)
    public String registerPage(Model model) {
       
        model.addAttribute("user", new User());
        return "register";
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public String saveRegisterPage(@Validated @ModelAttribute("user") User user, @RequestParam String role, BindingResult result, Model model,
            Map<String, Object> map) {

        model.addAttribute("user", user);
        if (result.hasErrors()) {
            return "register";
        }
         else
        
        {
       
        	
         Role r=new Role();
            r.setRole(role);
             user.setRoles(new HashSet<Role>() {{
             	add(r);
            }});
    		String pwd = user.getPassword();
    		String encryptPwd = passwordEncoder.encode(pwd);
    		user.setPassword(encryptPwd);
    		map.put("message", "Successful");
    		userRepository.save(user);

        }
        return "register";
    }

}