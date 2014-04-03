/**
 * 
 */
package se.niksa.websocket.security;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.http.server.ServletServerHttpRequest;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.HandshakeInterceptor;

/**
 * @author niksa.jakovljevic
 *
 */
public class AuthenticationInterceptor implements HandshakeInterceptor {

	public void afterHandshake(ServerHttpRequest arg0, ServerHttpResponse arg1, WebSocketHandler arg2, Exception arg3) {
	}

	public boolean beforeHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler webSocketHandler,
			Map<String, Object> attributes) throws Exception {
		if (request instanceof ServletServerHttpRequest) {
			ServletServerHttpRequest servletRequest = (ServletServerHttpRequest) request;
			HttpServletRequest httpServletRequest  = servletRequest.getServletRequest();
			String hash = httpServletRequest.getParameter("hash");
			String apiKey = httpServletRequest.getParameter("api_key");
			if(hash.equals("1234567890")) return true;
		}
		response.setStatusCode(HttpStatus.UNAUTHORIZED);
		return false;
	}
	
	protected static Log log = LogFactory.getLog(AuthenticationInterceptor.class);
	

}
