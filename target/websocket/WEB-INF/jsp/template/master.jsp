<%@ include file="include.jsp" %>
<!doctype html >
<html lang="en">
<head>
<title>Websocket</title>
<link href="<c:url value='/resources/css/bootstrap.min.css'  />"
	rel="stylesheet" />
<link
	href="<c:url value='/resources/css/bootstrap-responsive.min.css'  />"
	rel="stylesheet" />
<link href="<c:url value='/resources/css/coinstack.css'  />"
	rel="stylesheet" />
	
	<!-- Icons -->
<link rel="shortcut icon" href="<c:url value='/resources/img/favicon.ico'  />">
<link rel="icon" href="<c:url value='/resources/img/favicon.ico'  />">
	
	
<script src="<c:url value='/resources/js/jquery-1.9.1.min.js' />"></script>
<script src="<c:url value='/resources/js/coinstack.js' />"></script>

<script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"></script>

</head>
<body>
	<div class="navbar navbar-inverse navbar-fixed-top">
      	<tiles:insertAttribute name="header" />
    </div>
	<div class="container">
		<tiles:insertAttribute name="body" />
	</div>

	<script src="<c:url value='/resources/js/bootstrap.min.js' />"></script>
	
	<footer class="footer" style="padding-top: 30px;">
		<tiles:insertAttribute name="footer" />
	</footer>
</body>
</html>