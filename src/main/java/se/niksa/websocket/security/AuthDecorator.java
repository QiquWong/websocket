/**
 * 
 */
package se.niksa.websocket.security;

import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.WebSocketMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.WebSocketHandlerDecorator;

/**
 * @author niksa.jakovljevic
 *
 */
public class AuthDecorator extends WebSocketHandlerDecorator {

	public AuthDecorator(WebSocketHandler delegate) {
		super(delegate);
	}

	@Override
	public void handleMessage(WebSocketSession session, WebSocketMessage<?> message) throws Exception {
		super.handleMessage(session, message);
	}
	
	

}
