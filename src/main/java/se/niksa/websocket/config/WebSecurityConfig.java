/**
 * 
 */
package se.niksa.websocket.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.servlet.configuration.EnableWebMvcSecurity;

/**
 * @author niksa.jakovljevic
 *
 */
@Configuration
@EnableWebSecurity
@EnableWebMvcSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//		http.formLogin()
//		.defaultSuccessUrl("/index.html")
//		.loginPage("/login")
//		.failureUrl("/login?error")
//		.permitAll();
//	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.inMemoryAuthentication().withUser("niksa").password("test").roles("ADMIN");
	}
	
	

}
