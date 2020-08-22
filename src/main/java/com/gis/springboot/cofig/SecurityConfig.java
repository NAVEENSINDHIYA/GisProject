package com.gis.springboot.cofig;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	//@Autowired
    //private JdbcTemplate jdbcTemplate;

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		//auth.jdbcAuthentication().dataSource(jdbcTemplate.getDataSource()).passwordEncoder(encodePwd());
		auth.inMemoryAuthentication().withUser("user").password(encodePwd().encode("user")).roles("user")
         .and().withUser("admin").password(encodePwd().encode("admin")).roles("admin");
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()
        .antMatchers("/login","/webjars/**","/**/*.js", "/**/*.css","/**/*.jpg","/**/*.png").permitAll()
		.anyRequest().authenticated().and()
        .formLogin().loginPage("/login").and()
        .logout()
        .logoutSuccessUrl("/login").permitAll().and()
        .exceptionHandling().accessDeniedPage("/logout").and()
        .headers().frameOptions().disable().and()
        .csrf().disable();
	}

	@Bean
	public PasswordEncoder encodePwd() {
		return new BCryptPasswordEncoder();
	}
}