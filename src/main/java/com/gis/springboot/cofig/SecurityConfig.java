package com.gis.springboot.cofig;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private UserDetailsService userDetailsService;

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService).passwordEncoder(encodePwd());
		// auth.inMemoryAuthentication().withUser("user").password(encodePwd().encode("user")).roles("user")
        //  .and().withUser("admin").password(encodePwd().encode("admin")).roles("admin");
	}
	@Bean
	public AuthenticationSuccessHandler myAuthenticationSuccessHandler(){
	    return new MyAuthenticationSuccessHandler();
	}
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()
		.antMatchers("/login","/register","/webjars/**","/**/*.js", "/**/*.css","/**/*.jpg","/**/*.png").permitAll()
		.antMatchers("/openlayers").access("hasRole('admin')")
			.anyRequest().authenticated().and()
        .formLogin().loginPage("/login").successHandler(myAuthenticationSuccessHandler()).and()
        .logout()
        .logoutSuccessUrl("/login").permitAll().and()
        .exceptionHandling().accessDeniedPage("/logout").and()
        .headers().frameOptions().disable().and()
        .csrf().disable();
	}

	// @Bean
	// public PasswordEncoder encodePwd() {
	// 	return new BCryptPasswordEncoder();
	// }
	@Bean
	public BCryptPasswordEncoder encodePwd() {
		return new BCryptPasswordEncoder();
	}
}