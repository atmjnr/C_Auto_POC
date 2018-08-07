package com.cucumber.steps;


import com.enums.MatcherEnum;
import com.support.matcher.MatcherUtil;
import com.support.session.SessionKey;
import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import gherkin.formatter.model.DataTableRow;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.response.Response;
import org.hamcrest.Matchers;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

import static org.hamcrest.CoreMatchers.*;
import static org.hamcrest.MatcherAssert.assertThat;

public class CommonSteps extends BaseStep {

    @Autowired
    private MatcherUtil matcherUtil;

    @Before
    public void beforeTest(){

        //if the profile env property isn't set then default to run on local
        if(System.getProperty("spring.profiles.active") == "" || System.getProperty("spring.profiles.active") == null){
            System.setProperty("spring.profiles.active", "local");
        }
    }

    @After
    public void afterTest(){
        scenarioSession.cleanScenarioSession();
    }

    @Given("^I have a new request with the following details$")
    public void addRequestDetails(DataTable table) {

        RequestSpecBuilder request = new RequestSpecBuilder();

        List<DataTableRow> rows = table.getGherkinRows();

        rows.stream()
                .skip(1)
                .forEach(item ->{
                    switch (item.getCells().get(0).toUpperCase()) {
                        case "REQUEST_PARAM":
                            request.addParam(item.getCells().get(1), item.getCells().get(2));
                            break;
                        case "PATH_PARAM":
                            request.addPathParam(item.getCells().get(1), item.getCells().get(2));
                            break;
                        case "HEADER":
                            request.addHeader(item.getCells().get(1), item.getCells().get(2));
                            break;
                        default:
                            throw new RuntimeException("type '" + item.getCells().get(1) + "' is not an allowed value. Value has to be either 'REQUEST_PARAM', PATH_PARAM' or 'HEADER'");
                    }
                });

        scenarioSession.putData(SessionKey.REQUEST, request);
    }

    @And("^the following fields and their values are returned successfully$")
    public void assertFields(DataTable table) {
        assertFieldsWithRootPath("", table);
    }

    @And("^the following fields and their values are returned successfully for the root jsonPath (.*)")
    public void assertFieldsWithRootPath(String rootPath, DataTable table) {

        ResponseSpecBuilder expResults = new ResponseSpecBuilder();
        if (!rootPath.isEmpty()) {
            expResults.rootPath(rootPath);
        }

        List<DataTableRow> rows = table.getGherkinRows();
        rows.stream()
                .skip(1)
                .forEach(item ->
                        expResults.expectBody(item.getCells().get(0),
                                matcherUtil.getMatcher(MatcherEnum.valueOf(item.getCells().get(1)),
                                        item.getCells().get(2)))
                );

        //validate against the latest response
        expResults.build().validate(scenarioSession.getLatestResponse());
    }

    @Then("^the status code (\\d+) is returned$")
    public void assertStatusCode(int statusCode) throws Throwable {
        assertLatestResponse(new ResponseSpecBuilder().expectStatusCode(statusCode));
    }

    @Then("^the field with jsonPath '(.*)' is (equal to|not equal to) '(.*)'$")
    public void assertJsonField(String path, String matcher, String value) {
        assertFieldValue(path, matcher, value);
    }

    @Then("^the boolean field with jsonPath '(.*)' is (equal to|not equal to) '(.*)'$")
    public void assertBooleanField(String path, String matcher, Boolean value) {
        assertFieldValue(path, matcher, value);
    }

    @Then("^the number field with jsonPath '(.*)' is (not equal to|equal to) '(-?\\d+)'$")
    public void assertNumberField(String path, String matcher, Integer number) {
        assertFieldValue(path, matcher, number);
    }

    @Then("^the number of items in the array with jsonPath (.*) is (equalTo|greaterThan|lessThan) '(.*)'$")
    public void assertFieldCount(String path, String matcher, int value) {
        assertLatestResponse(matcherUtil.getResponseSpecBuilder(MatcherEnum.valueOf(matcher), path + ".size()", value));
    }

    @Then("^the field with jsonPath '(.*)' contains the string '(.*)'$")
    public void assertContainsString(String path, String value) {
        assertLatestResponse(new ResponseSpecBuilder().expectBody(path, containsString(value)));
    }

    @Then("^the field with jsonPath '(.*)' is '(returned|not returned)'$")
    public void assertFieldPresent(String path, String matcher) throws Throwable {

        Response response = (Response)scenarioSession.getData(SessionKey.LATEST_RESPONSE);

        if(matcher.toLowerCase() == "returned"){
            assertThat("", response.jsonPath().get(path), notNullValue());
        } else if(matcher.toLowerCase() == "not returned"){
            assertThat("", response.jsonPath().get(path), nullValue());
        } else {
            throw new RuntimeException("'" + matcher + "' is not an allowed matcher argument for this step. Allowed values are 'returned' and 'not returned'");
        }
    }

    @Then("^all of the fields returned with jsonPath '(.*)' contains the string '(.*)'$")
    public void assertJsonField(String path, String value) {

        Response response = (Response)scenarioSession.getData(SessionKey.LATEST_RESPONSE);
        assertThat("No fields were returned from the jsonpath '" + path + "'", response.jsonPath().get(path + ".size()"), Matchers.greaterThan(0));
        assertLatestResponse(new ResponseSpecBuilder().expectBody(path, everyItem(containsString(value))));
    }

    @Given("^I have the test (.*)$")
    public void writeTestName(String testName) {
        System.out.println("********\nStarting test: '" + testName + "'\n");
    }



    
    private <T> void assertFieldValue(String path, String matcher, T value){

        ResponseSpecBuilder expResults = new ResponseSpecBuilder();

        if (matcher.toLowerCase().equalsIgnoreCase("equal to")) {
            expResults.expectBody(path, equalTo(value));
        } else if (matcher.toLowerCase().equalsIgnoreCase("not equal to")) {
            expResults.expectBody(path, not(equalTo(value)));
        } else {
            throw new RuntimeException("'" + matcher + "' is not an allowed value for this step. Please choose from 'equal to' or 'not equal to'");
        }

        assertLatestResponse(expResults);
    }

}
