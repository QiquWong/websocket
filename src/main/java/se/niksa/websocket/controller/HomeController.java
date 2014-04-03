/**
 * 
 */
package se.niksa.websocket.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * @author niksa.jakovljevic
 *
 */
@Controller
public class HomeController {
	
	@RequestMapping(value="/index.html", method=RequestMethod.GET)
	public String home(){
		return "index";
	}

}
