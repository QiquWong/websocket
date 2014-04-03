package se.niksa.websocket.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.ChannelRegistration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.socket.config.annotation.AbstractWebSocketMessageBrokerConfigurer;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;

import se.niksa.websocket.security.AuthChannelInterceptor;
import se.niksa.websocket.security.AuthenticationInterceptor;

@Configuration
@EnableScheduling
@EnableWebSocketMessageBroker
@ComponentScan(value="se.niksa.websocket")
public class WebSocketConfig extends AbstractWebSocketMessageBrokerConfigurer {

	public void registerStompEndpoints(StompEndpointRegistry registry) {
		registry.addEndpoint("/stomp").withSockJS()
						.setInterceptors(new AuthenticationInterceptor());
		
	}

	@Override
	public void configureMessageBroker(MessageBrokerRegistry registry) {
		registry.enableSimpleBroker("/topic");
		registry.setApplicationDestinationPrefixes("/app");
	}

	@Override
	public void configureClientInboundChannel(ChannelRegistration registration) {
	//	registration.setInterceptors(new AuthChannelInterceptor());
		super.configureClientInboundChannel(registration);
	}
	
	
	
	

}
