package com.service;


import com.enums.HttpMethod;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.response.Response;
import org.springframework.stereotype.Component;

@Component
public class NdrListManagementApi extends BaseService{

    private static final String basicSearchEndpoint = "/ndr-list-management-api/ndrlist/{listYear}/basicSearch";

    public Response getBasicSearch(RequestSpecBuilder request){
        request.setBaseUri(getServicesBaseUrl());
        return sendRequest(request, basicSearchEndpoint, HttpMethod.GET);
    }



}
