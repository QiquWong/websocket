var cs = cs || {};

cs.order = {};

cs.order.calc=function(target, source, rate){
	var res = source.val() * rate;
	target.val(res);
};

cs.util = {};

cs.util.isEmail=function(email) {
	  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	  return regex.test(email);
};

cs.util.print=function(jQueryClone, contextPath){
	jQueryClone.find('a').remove();
	var content = jQueryClone.html();
	var mywindow = window.open('', 'Order', 'height=400,width=600');
    mywindow.document.write('<html><head><title>Order</title>');
    contextPath = contextPath+'/';
    mywindow.document.write('<link rel="stylesheet" href="'+contextPath+'resources/css/print.css" type="text/css" />');
    
    mywindow.document.write('</head><body>');
    mywindow.document.write(content);
    mywindow.document.write('</body></html>');

    mywindow.document.close();
    mywindow.focus();

    return true;
};