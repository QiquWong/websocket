/**
 * 
 */
package se.niksa.websocket.config;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

/**
 * @author niksa.jakovljevic
 *
 */
public class ApplicationInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {

	@Override
	protected Class<?>[] getRootConfigClasses() {
		return new Class<?>[]{RootConfig.class};
	}

	@Override
	protected Class<?>[] getServletConfigClasses() {
		return new Class<?>[]{WebMvcConfig.class};
	}

	@Override
	protected String[] getServletMappings() {
		return new String[]{"/"};
	}

}
