package com.service;


        import com.enums.HttpMethod;
        import io.restassured.builder.RequestSpecBuilder;
        import io.restassured.response.Response;
        import org.springframework.stereotype.Component;

@Component
public class AuthorisationSearchApi extends BaseService{

    private static final String getAgentAuths = "authorisation-search-api/agents/{agentId}/authorisations";
    private static final String getAvailableAuths = "authorisation-search-api/owners/{ownerId}/agents/{agentId}/availableAuthorisations";
    private static final String getOwnerAgents = "authorisation-search-api/owners/{ownerId}/agents";
    private static final String getOwnerAuths = "authorisation-search-api/owners/{ownerId}/authorisations";

    public Response getAgentAuths(RequestSpecBuilder request){
        request.setBaseUri(getServicesBaseUrl());
        return sendRequest(request, getAgentAuths, HttpMethod.GET);
    }

    public Response getAvailableAuths(RequestSpecBuilder request){
        request.setBaseUri(getServicesBaseUrl());
        return sendRequest(request, getAvailableAuths, HttpMethod.GET);
    }

    public Response getOwnerAgents(RequestSpecBuilder request){
        request.setBaseUri(getServicesBaseUrl());
        return sendRequest(request, getOwnerAgents, HttpMethod.GET);
    }

    public Response getOwnerAuths(RequestSpecBuilder request){
        request.setBaseUri(getServicesBaseUrl());
        return sendRequest(request, getOwnerAuths, HttpMethod.GET);
    }




}

