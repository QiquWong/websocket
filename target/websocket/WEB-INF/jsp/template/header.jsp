<%@ include file="include.jsp" %>
 <div class="navbar-inner">
        <div class="container">
          <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="brand" href="#"><spring:message code="title"></spring:message></a>
          <div class="nav-collapse collapse">
          	 <ul class="nav">
          	 	<sec:authorize access="isAnonymous()">
          	 		<li><a href="login">Login</a></li>
          	 		<li><a href="register">Register</a></li>
          	 	</sec:authorize>
          	 	
          		<sec:authorize access="isAuthenticated()">
	              <li class="active"><a href="dashboard">Dashboard</a></li>
	              <li class="active"><a href="order">Buy</a></li>
	              <li><a href="verify">Verify</a></li>
	              <li class="dropdown">
	                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Account <b class="caret"></b></a>
	                <ul class="dropdown-menu">
	                  <li><a href="user/changePassword">Change password</a></li>
	                </ul>
	              </li>
              <%-- 
              <li><a href="#contact">Contact</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
                <ul class="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li class="divider"></li>
                  <li class="nav-header">Nav header</li>
                  <li><a href="#">Separated link</a></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li>
            </ul> --%>
            
            </sec:authorize>
            </ul>
            <sec:authorize access="isAuthenticated()">
            	<ul class="nav pull-right">
            			<li><a href="#">You are logged in as: <c:out value="${sessionScope.user.email}" /></a></li>
       					<li><a href='<c:url value="/logout" />'">Logout</a></li>
      			</ul>
            </sec:authorize>
          </div><!--/.nav-collapse -->
        </div>
      </div>