package com.cucumber.steps.addressManagementApi;


import com.cucumber.steps.BaseStep;
import com.support.session.SessionKey;
import cucumber.api.DataTable;
import cucumber.api.java.en.When;
import gherkin.formatter.model.DataTableRow;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.response.Response;
import org.json.JSONObject;

import java.util.List;

public class AddressManagementAPI extends BaseStep {


    @When("^I send the request to Address Management API 'GET AddressUnitId' endpoint$")
    public void getAddressUnitId() {

        //get the latest request that we've previously stored
        RequestSpecBuilder request = (RequestSpecBuilder) scenarioSession.getData(SessionKey.REQUEST);

        //send the request and get the response
        Response response = addressManagementApi.getAddressUnitId(request);

        //store the response for use in later steps
        scenarioSession.putData(SessionKey.LATEST_RESPONSE, response);
    }

    @When("^I send the request to Address Management API 'POST Non Standard Address' endpoint$")
    public void postNonStandardAddress() {
        RequestSpecBuilder request = (RequestSpecBuilder) scenarioSession.getData(SessionKey.REQUEST);
        Response response = addressManagementApi.postNonStandardAddress(request);
        scenarioSession.putData(SessionKey.LATEST_RESPONSE, response);
    }

    @When("^I send the request to Address Management API 'PUT Non Standard Address' endpoint$")
    public void putNonStandardAddress() {
        RequestSpecBuilder request = (RequestSpecBuilder) scenarioSession.getData(SessionKey.REQUEST);
        Response response = addressManagementApi.putNonStandardAddress(request);
        scenarioSession.putData(SessionKey.LATEST_RESPONSE, response);
    }

    @When("^I add a Create Non Standard Address json payload to my request with the following details$")
    public void AddressValidPayload(DataTable table) {
        RequestSpecBuilder request = (RequestSpecBuilder) scenarioSession.getData(SessionKey.REQUEST);

        JSONObject requestParams = new JSONObject();

        List<DataTableRow> rows = table.getGherkinRows();

        rows.stream()
                .skip(1)
                .forEach((DataTableRow item) -> {
                    switch (item.getCells().get(0).toUpperCase()) {
                        case "POSTCODE":
                            requestParams.put(item.getCells().get(0), item.getCells().get(1));
                            break;
                        case "SUBBUILDINGNAME":
                            requestParams.put(item.getCells().get(0), item.getCells().get(1));
                            break;
                        case "ORGANISATIONNAME":
                            requestParams.put(item.getCells().get(0), item.getCells().get(1));
                            break;
                        case "THOROUGHFARENAME":
                            requestParams.put(item.getCells().get(0), item.getCells().get(1));
                            break;
                        case "BUILDINGNUMBER":
                            requestParams.put(item.getCells().get(0), item.getCells().get(1));
                            break;
                        case "DEPENDENTLOCALITY":
                            requestParams.put(item.getCells().get(0), item.getCells().get(1));
                            break;
                        case "DEPENDENTTHOROUGHFARENAME":
                            requestParams.put(item.getCells().get(0), item.getCells().get(1));
                            break;
                        case "DEPARTMENTNAME":
                            requestParams.put(item.getCells().get(0), item.getCells().get(1));
                            break;
                        case "DOUBLEDEPENDENTLOCALITY":
                            requestParams.put(item.getCells().get(0), item.getCells().get(1));
                            break;
                    }
                });

        request.setBody(requestParams.toString());

        scenarioSession.putData(SessionKey.REQUEST, request);
    }


}





//    @When("^I add a Create Non Standard Address json payload to my request with the following details$")
//    public void AddressValidPayload() {
//        RequestSpecBuilder request = (RequestSpecBuilder) scenarioSession.getData(SessionKey.REQUEST);
//
//        JSONObject requestParams = new JSONObject();
//
//        requestParams.put("postcode", "EX2 8HH");
//        requestParams.put("subBuildingName", "Test");
//        requestParams.put("organisationName", "TestOrg");
//        requestParams.put("thoroughfareName", "TestThorough");
//        requestParams.put("buildingNumber", "10");
//        requestParams.put("dependentLocality", "High Street");
//        requestParams.put("dependentThoroughfareName", "J Jones");
//        requestParams.put("departmentName", "VOA");
//        requestParams.put("doubleDependentLocality", "W Sussex");
//
//        request.setBody(requestParams.toString());
//
//        scenarioSession.putData(SessionKey.REQUEST, request);
//        }