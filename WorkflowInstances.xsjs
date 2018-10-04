var put_query;
var put_stmt;
var put_rs;

var conn;
var destination_package;
var destination_name;
var client;
var dest;
//var ReqBody = JSON.parse($.request.body.asString());


try {
	destination_package = "WorkflowTest";
	destination_name = "workflow";
		dest = $.net.http.readDestination(destination_package, destination_name);
      client = new $.net.http.Client();
       var req = $.net.http.Request($.net.http.GET, "/xsrf-token");
	req.headers.set("x-csrf-token", "fetch");
	client.request(req, dest);
	var response = client.getResponse();
	var CSRF = response.headers.get("x-csrf-token");

	var body1 = {
			"definitionId" : "digital_field_ticket_workflow",//digital_field_ticket_workflow",
             "context" : {
                        "appId" : "D99TEG78", 
                        "fieldTicketId" : "2893YH634",
                        "department" : "Operation",
                        "location" : "US",
                         "isApprovedByMurphyEngineer": "true",
                         "workflowTriggerTimeStamp" : "",
                         "vendorId" : "Test",
                         "vendorName" :  "abc",
                         "vendorEmailId" : "pranav.nagpal.1990@Incture.com",
                         "murphyEngineerId" : "P000002",
                         "murphyEngineerEmailId" : "pranav.nagpal.1990@Incture.com"
}
	};
	
	   //client = new $.net.http.Client();
      var req1 = $.net.http.Request($.net.http.POST, "/workflow-instances");
        
       req1.headers.set("Content-Type","application/json");
       req1.headers.set("Accept","application/json");
       req1.setBody(JSON.stringify(body1));
       client.request(req1, dest);
       var response1 = client.getResponse();
       $.response.setBody(response1);
       
       
} catch (e) {
	$.response.status = $.net.http.OK;
	$.response.setbody(e.message);
}