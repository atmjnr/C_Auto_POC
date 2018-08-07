package com.service;


import com.enums.HttpMethod;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.response.Response;
import org.springframework.stereotype.Component;

@Component
public class ExternalPropertyLinkManagementApi extends BaseService{

    private static final String postPropertyLinkEndPoint = "/external-property-link-management-api/my-organisation/property-links";

    public Response createPropertyLink(RequestSpecBuilder request){
        request.setBaseUri(getServicesBaseUrl());
        return sendRequest(request, postPropertyLinkEndPoint, HttpMethod.POST);
    }


}
