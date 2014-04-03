/**
 * 
 */
package se.niksa.websocket.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import se.niksa.websocket.domain.Ticker;
import se.niksa.websocket.service.TickerService;

/**
 * @author niksa.jakovljevic
 *
 */
@Controller
public class TickerController {
	
	@Autowired
	private TickerService tickerService;
	
	@MessageMapping("/tickers")
	@SendTo("/topic/tickers")
	public List<Ticker> getTickers(){
		return tickerService.getTickers();
	}
	
	@MessageMapping("/ticker")
	@SendTo("/topic/ticker")
	public Ticker getTicker(String symbol){
		Ticker ticker = tickerService.getTicker(symbol);
		return ticker;
	}
	
	public void sendUpdates(){
		
	}

}
