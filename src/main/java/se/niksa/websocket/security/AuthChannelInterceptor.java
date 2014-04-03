/**
 * 
 */
package se.niksa.websocket.security;

import java.util.Map;

import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;

/**
 * @author niksa.jakovljevic
 *
 */
public class AuthChannelInterceptor implements ChannelInterceptor {

	public Message<?> preSend(Message<?> message, MessageChannel channel) {
		StompHeaderAccessor headerAccessor = StompHeaderAccessor.wrap(message);
		if(StompCommand.CONNECT.equals(headerAccessor.getCommand())){
			Map<String, String> nativeHeaders = (Map)headerAccessor.getHeader("nativeHeaders");
			String hash = nativeHeaders.get("hash");
			if("secret".equals(hash)){
				return message;
			}
			throw new IllegalArgumentException("Not authenticated");
		}
		return message;
	}

	public void postSend(Message<?> message, MessageChannel channel, boolean sent) {
		
	}

	public boolean preReceive(MessageChannel channel) {
		return true;
	}

	public Message<?> postReceive(Message<?> message, MessageChannel channel) {
		return message;
	}

}
