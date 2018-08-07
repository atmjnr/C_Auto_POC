package com.cucumber.steps.authorisationManagementApi;


import com.cucumber.steps.BaseStep;
import com.support.session.SessionKey;
import cucumber.api.DataTable;
import cucumber.api.java.en.When;
import gherkin.formatter.model.DataTableRow;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.response.Response;
import org.json.JSONObject;

import java.util.List;


public class AuthorisationManagementAPI extends BaseStep {


    @When("^I send the request to Authorisation Management API 'GET Authorisation ID' endpoint$")
    public void getAuthId(){

        //get the latest request that we've previously stored
        RequestSpecBuilder request = (RequestSpecBuilder) scenarioSession.getData(SessionKey.REQUEST);

        //send the request and get the response
        Response response = authorisationManagementApi.getAuthId(request);

        //store the response for use in later steps
        scenarioSession.putData(SessionKey.LATEST_RESPONSE, response);
    }

    @When("^I send the request to Authorisation Management API 'PATCH Authorisation ID' endpoint$")
    public void patchAuthId(){

        //get the latest request that we've previously stored
        RequestSpecBuilder request = (RequestSpecBuilder) scenarioSession.getData(SessionKey.REQUEST);

        //send the request and get the response
        Response response = authorisationManagementApi.patchAuthId(request);

        //store the response for use in later steps
        scenarioSession.putData(SessionKey.LATEST_RESPONSE, response);
    }

    @When("^I add a Create Authorisation PATCH json payload to my request with the following details$")
    public void AuthorisationPayload(DataTable table) {
        RequestSpecBuilder request = (RequestSpecBuilder) scenarioSession.getData(SessionKey.REQUEST);

        JSONObject requestParams = new JSONObject();

        List<DataTableRow> rows = table.getGherkinRows();

        rows.stream()
                .skip(1)
                .forEach((DataTableRow item) -> {
                    switch (item.getCells().get(0).toUpperCase()) {
                        case "AUTHORISATIONSTATUS":
                            requestParams.put(item.getCells().get(0), item.getCells().get(1));
                            break;
                        case "AUTHORISATIONOWNERCAPACITY":
                            requestParams.put(item.getCells().get(0), item.getCells().get(1));
                            break;
                        case "CREATEDATETIME":
                            requestParams.put(item.getCells().get(0), item.getCells().get(1));
                            break;
                    }
                });

        request.setBody(requestParams.toString());

        scenarioSession.putData(SessionKey.REQUEST, request);
    }


}
