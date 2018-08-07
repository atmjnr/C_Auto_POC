package com.cucumber.steps.authorisationSearchApi;


        import com.cucumber.steps.BaseStep;
        import com.support.session.SessionKey;
        import cucumber.api.java.en.When;
        import io.restassured.builder.RequestSpecBuilder;
        import io.restassured.response.Response;

public class AuthorisationSearchAPI extends BaseStep {


    @When("^I send the request to Authorisation Search API 'GET Agent Authorisations' endpoint$")
    public void getAgentAuths(){

        //get the latest request that we've previously stored
        RequestSpecBuilder request = (RequestSpecBuilder) scenarioSession.getData(SessionKey.REQUEST);

        //send the request and get the response
        Response response = authorisationSearchApi.getAgentAuths(request);

        //store the response for use in later steps
        scenarioSession.putData(SessionKey.LATEST_RESPONSE, response);
    }



    @When("^I send the request to Authorisation Search API 'GET Available Authorisations' endpoint$")
    public void getAvailableAuths(){
        RequestSpecBuilder request = (RequestSpecBuilder) scenarioSession.getData(SessionKey.REQUEST);
        Response response = authorisationSearchApi.getAvailableAuths(request);
        scenarioSession.putData(SessionKey.LATEST_RESPONSE, response);
    }

    @When("^I send the request to Authorisation Search API 'GET Owner Agents' endpoint$")
    public void getOwnerAgents(){
        RequestSpecBuilder request = (RequestSpecBuilder) scenarioSession.getData(SessionKey.REQUEST);
        Response response = authorisationSearchApi.getOwnerAgents(request);
        scenarioSession.putData(SessionKey.LATEST_RESPONSE, response);
    }

    @When("^I send the request to Authorisation Search API 'GET Owner Authorisations' endpoint$")
    public void getOwnerAuths(){
        RequestSpecBuilder request = (RequestSpecBuilder) scenarioSession.getData(SessionKey.REQUEST);
        Response response = authorisationSearchApi.getOwnerAuths(request);
        scenarioSession.putData(SessionKey.LATEST_RESPONSE, response);
    }

}

