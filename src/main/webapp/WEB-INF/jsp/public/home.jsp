<%@ include file="/WEB-INF/jsp/template/include.jsp"%>
<div style="padding-top: 40px;">
	<h3>Welcome Websockets!</h3>
	
	<noscript><h2 style="color: #ff0000">Seems your browser doesn't support Javascript! Websocket relies on Javascript being enabled. Please enable
	    Javascript and reload this page!</h2></noscript>
	<div>
	    <div>
	        <button id="connect" onclick="connect();">Connect</button>
	        <button id="disconnect" disabled="disabled" onclick="disconnect();">Disconnect</button>
	    </div>
	    <div id="conversationDiv" style="padding-top: 20px; display: none;">
	       <%--  <label>What is your name?</label><input type="text" id="name" /> --%>
	        <button id="sendName" onclick="getTickers();">Get Tickers</button>
	        <p id="response"></p>
	    </div>
	</div>
</div>

<script type="text/javascript">
        var stompClient = null;

        function setConnected(connected) {
            document.getElementById('connect').disabled = connected;
            document.getElementById('disconnect').disabled = !connected;
            document.getElementById('conversationDiv').style.display = connected ? 'block' : 'none';
            document.getElementById('response').innerHTML = '';
        }

        function connect() {
        	var headers = {
        		      login: 'admin',
        		      passcode: 'admin',
        		      'hash':'secret'};
           // var socket = new SockJS('<c:url value="/stomp"/>');
           // stompClient = Stomp.over(socket);
            stompClient = Stomp.client('ws://localhost:8080/websocket/stomp/websocket?hash=1234567890&api_key=key');
            stompClient.connect(headers, function(frame) {
                setConnected(true);
                console.log('Connected: ' + frame);
                stompClient.subscribe('/topic/tickers', function(response){
                    //showGreeting(JSON.parse(response.body));
                    showGreeting(response.body);
                }, headers);
            });
        }

        function disconnect() {
            stompClient.disconnect();
            setConnected(false);
            console.log("Disconnected");
        }

        function getTickers() {
            stompClient.send('/app/tickers', {}, {});
        }

        function showGreeting(message) {
            var response = document.getElementById('response');
            var p = document.createElement('p');
            p.style.wordWrap = 'break-word';
            p.appendChild(document.createTextNode(message));
            response.appendChild(p);
        }
    </script>