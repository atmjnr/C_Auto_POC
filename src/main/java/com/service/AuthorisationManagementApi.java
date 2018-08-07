package com.service;

import com.enums.HttpMethod;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.response.Response;
import org.springframework.stereotype.Component;


@Component

public class AuthorisationManagementApi extends BaseService {

    // Variable for each Endpoint
    private static final String getAuthId = "/authorisation-management-api/authorisation/{authorisationId}";
    private static final String patchAuthId = "/authorisation-management-api/authorisation/{authorisationId}";


    // Response for each Endpoint
    public Response getAuthId(RequestSpecBuilder request){
        request.setBaseUri(getServicesBaseUrl());
        return sendRequest(request, getAuthId, HttpMethod.GET);
    }

    public Response patchAuthId(RequestSpecBuilder request){
        request.setBaseUri(getServicesBaseUrl());
        return sendRequest(request, patchAuthId, HttpMethod.PATCH);
    }


}
