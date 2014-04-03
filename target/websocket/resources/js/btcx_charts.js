	  
$(document).ready(function(){
	
	var socket = io.connect('http://quickbit.eu:8080');
	  socket.on('connect', function(){
			$('#status').html('Connected to QuickBit websocket');
	  });
	  socket.on('disconnect', function(){
			$('#status').html('Disconnected from QuickBit websocket');
	  });
	  socket.on('error', function(){
			$('#status').html('Error connecting QuickBit websocket');
	  });
	  socket.on('networkStats', function (data) {
		  var obj = JSON.parse(data);
		  
		  var market_cap = obj.data.market_cap/1000000;
		  
		  if(market_cap <= 1000){
			  market_cap = "$" + parseFloat(market_cap).toFixed(0) + "m"
		  } else {
			  market_cap = "$" + parseFloat(market_cap/1000).toFixed(2) + "B"
		  }
		  
		   $('#network_market_cap').html(market_cap);
		   $('#network_totalbtc').html(parseFloat(obj.data.totalbc/1000000).toFixed(2) + "m");
		   $('#network_difficulty').html(parseFloat(obj.data.difficulty/1000000).toFixed(2) + "m");
	  });
	  socket.on('ticker', function (data) {
		  var obj = JSON.parse(data);
		  $('#ticker_bitstamp').html("$"+obj.bitstamp.BTC.USD[0].last);
		  console.log(obj);
	  });
	  
	  var marketName='';
	  socket.on('marketData', function (data) {
		  
		  	var currentTimestamp = new Date().getTime();
	 
			$('#widget_graph').highcharts('StockChart', {
				chart: {
					backgroundColor: '#F7F6F2',
					plotBackgroundColor: '#F7F6F2',
					plotBorderWidth: 0,
					panning: false,
					marginLeft: 0,
					marginRight: 0,
					spacingBottom: 30,
					style: {
						fontFamily: '"Open Sans", sans-serif;', // default font
					}
				},
				plotOptions: {
					series: {
						animation: {
							duration: 1500
						}
					}
				},
				colors: ['#FC810A'],
				xAxis: {
					min: currentTimestamp - (60 * 60 * 24 * 7 * 1000),
					max: currentTimestamp,
					
					type: 'datetime',
					
					tickLength: 10,
					tickWidth: 1,
					tickColor: '#ccc',
					lineWidth: 0,
					lineColor: '#ccc',
					labels: {
						y: 40,
						style: {
							color: '#808080',
							fontSize: '13px',
						}
					},
					offset: 20,
				},
				yAxis: {
					title: false,
					tickLength: 0,
					gridLineWidth: 0,
					gridLineColor: '#e6e6e6',
					maxPadding: 1,
					minPadding: 0,
					labels: {
						enabled: false
					}
				},
				tooltip: {
					borderRadius: 0,
					backgroundColor: '#293541',
					borderWidth: 0,
					shadow: false,
					style: {
						color: '#fff',
					},
					crosshairs: {
						color: '#FFA03A',
					}
				},
				navigator: {
					enabled: false
				},
				scrollbar: {
					enabled: false
				},
				credits: {
					enabled: false
				},
				rangeSelector: {
					enabled: false,
				},
				series: [{
					name: 'BitStamp price',
					data: JSON.parse(data),
					type: 'area',
					fillColor: 'rgba(255, 255, 255, 0.0)',
					tooltip: {
						valueDecimals: 2,
					},
					marker: {
						states: {
							hover: {
								fillColor: '#fff',	
								lineColor: '#FC810A',
								lineWidth: 2,
								radius: 5
							}
						}
					},
					threshold: null
				}]
				
			});

	  });
	  
		socket.emit('getMarketData', {"currency":"1","market":"2","crypto":"1"});	
		//currency 1-usd
		//market 1-mtgox, 2-bitstamp,3-btce
		
});

	
