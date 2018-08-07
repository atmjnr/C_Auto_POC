package com.cucumber.steps.customerManagementApi;

import com.cucumber.steps.BaseStep;
import com.support.session.SessionKey;
import cucumber.api.java.en.When;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.response.Response;

public class CustomerManagementAPI extends BaseStep {


    @When("^I send the request to Authorisation Search API 'GET Organisation' endpoint$")
    public void getOrganisation() {

        //get the latest request that we've previously stored
        RequestSpecBuilder request = (RequestSpecBuilder) scenarioSession.getData(SessionKey.REQUEST);

        //send the request and get the response
        Response response = customerManagementApi.getOrganisation(request);

        //store the response for use in later steps
        scenarioSession.putData(SessionKey.LATEST_RESPONSE, response);
    }
}