/**
 * 
 */
package se.niksa.websocket.domain;

/**
 * @author niksa.jakovljevic
 *
 */
public class Ticker {
	
	private String symbol;
	private double price;
	
	public Ticker(String symbol, double price){
		this.symbol = symbol;
		this.price = price;
	}
	 
	public String getSymbol() {
		return symbol;
	}
	public void setSymbol(String symbol) {
		this.symbol = symbol;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	
	

}
