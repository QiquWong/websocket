/**
 * 
 */
package se.niksa.websocket.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.scheduling.annotation.EnableScheduling;

/**
 * @author niksa.jakovljevic
 *
 */
@Configuration
@ComponentScan
@Import(WebSecurityConfig.class)
@EnableScheduling
public class RootConfig {

	
}
