package com.cucumber.steps.externalpropertylinkmanagementapi;


import com.cucumber.steps.BaseStep;
import com.support.session.SessionKey;
import cucumber.api.java.en.And;
import cucumber.api.java.en.When;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.response.Response;
import org.json.JSONArray;
import org.json.JSONObject;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Map;

public class CreatePropertyLinkSteps extends BaseStep {


    @And("^I add a Create Property Link json payload to my request with the following details$")
    public void createPropertyLinkPayload(Map<String, String> details) throws Throwable{

        RequestSpecBuilder request = (RequestSpecBuilder) scenarioSession.getData(SessionKey.REQUEST);
        JSONObject payload = createPropertyLinkJsonObj(
                Long.parseLong(details.get("uarn")),
                details.get("capacity"),
                details.get("method"),
                details.get("PLsubmissionId"));

        request.setBody(payload.toString());
        scenarioSession.putData(SessionKey.REQUEST, request);
    }

    @When("^I send the request to the External Property Link Management Api to create the property link$")
    public void createPropertyLink() {

        RequestSpecBuilder request = (RequestSpecBuilder) scenarioSession.getData(SessionKey.REQUEST);
        Response response = externalPropertyLinkManagementApi.createPropertyLink(request);
        scenarioSession.putData(SessionKey.LATEST_RESPONSE, response);
    }

    private JSONObject createPropertyLinkJsonObj(Long uarn,
                                           String capacity,
                                           String method,
                                           String plSubmissionId){

        JSONObject propLinkJson = new JSONObject();
        propLinkJson.put("uarn", uarn);
        propLinkJson.put("capacity", capacity);
        propLinkJson.put("startDate",  LocalDate.now().minusDays(1));
        propLinkJson.put("endDate",  LocalDate.now().plusDays(10));
        propLinkJson.put("method",  method);
        propLinkJson.put("PLsubmissionId",  plSubmissionId);
        propLinkJson.put("createDateTime",  LocalDateTime.now().minusDays(1));

        JSONArray uploadedFilesArray = new JSONArray();
        JSONObject filesObj = new JSONObject();
        filesObj.put("name", "test.pdf");
        filesObj.put("evidenceType", "License");
        uploadedFilesArray.put(filesObj);
        propLinkJson.put("uploadedFiles", uploadedFilesArray);
        propLinkJson.put("submissionSource",  "EXTERNAL_API");

        return propLinkJson;
    }

}
