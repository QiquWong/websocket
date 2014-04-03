package se.niksa.websocket.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import se.niksa.websocket.domain.Ticker;

@Service
public class TickerService {
	
	public Map<String, Ticker> cache = new HashMap<String, Ticker>();
	
	private Random r = new Random();
	
	// this should not be here but just dirty try :)
	@Autowired
	private SimpMessagingTemplate template;
	
	public TickerService(){
		init();
	}
	
	private void init(){
		cache.put("BTC", new Ticker("BTC", 569.34));
		cache.put("LTC", new Ticker("LTC", 15.62));
	}
	
	@Scheduled(fixedRate=1500)
	private void update(){
		for(Ticker t : cache.values()){
			double random = r.nextDouble();
			int sign = 1;
			if(random < 0.5) {
				sign = -1;
			}
			t.setPrice(t.getPrice()+(sign*t.getPrice()/10*random));
		}
		template.convertAndSend("/topic/tickers", cache.values());
	}
	
	public List<Ticker> getTickers(){
		List<Ticker> list = new ArrayList<Ticker>();
		list.addAll(cache.values());
		return list;
	}
	
	public Ticker getTicker(String symbol){
		Ticker ticker = cache.get(symbol);
		return ticker;
	}
	

}
