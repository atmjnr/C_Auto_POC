package com.service;


import com.enums.HttpMethod;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.response.Response;
import org.springframework.stereotype.Component;

@Component
public class CustomerManagementApi extends BaseService{

        private static final String getCustomerValidation = "/customer-management-api/customer/validation";
        private static final String getCustomerEvidence = "/customer-management-api/customer/evidence";
        private static final String putCustomerEvidence = "/customer-management-api/customer/evidence";
        private static final String getPerson = "/customer-management-api/person";
        private static final String postPerson = "/customer-management-api/person";
        private static final String putPersonId = "/customer-management-api/person/{personId}";
        private static final String getPersonIdHistory = "/customer-management-api/person/{personId}/history";
        private static final String getOrganisation = "/customer-management-api/organisation";
        private static final String postOrganisation = "/customer-management-api/organisation";
        private static final String putOrganisationId = "/customer-management-api/organisation/{organisationId}";
        private static final String getOrganisationIdHistory = "/customer-management-api/organisation/{organisationId}/history";
        private static final String getOrganisationSearch = "/customer-management-api/organisationSearch";


    public Response getCustomerValidation(RequestSpecBuilder request){
        request.setBaseUri(getServicesBaseUrl());
        return sendRequest(request, getCustomerValidation, HttpMethod.GET);
    }

    public Response getCustomerEvidence(RequestSpecBuilder request){
        request.setBaseUri(getServicesBaseUrl());
        return sendRequest(request, getCustomerEvidence, HttpMethod.GET);
    }

    public Response putCustomerEvidence(RequestSpecBuilder request){
        request.setBaseUri(getServicesBaseUrl());
        return sendRequest(request, putCustomerEvidence, HttpMethod.PUT);
    }

    public Response getPerson(RequestSpecBuilder request){
        request.setBaseUri(getServicesBaseUrl());
        return sendRequest(request, getPerson, HttpMethod.GET);
    }

    public Response postPerson(RequestSpecBuilder request){
        request.setBaseUri(getServicesBaseUrl());
        return sendRequest(request, postPerson, HttpMethod.POST);
    }

    public Response putPersonId(RequestSpecBuilder request){
        request.setBaseUri(getServicesBaseUrl());
        return sendRequest(request, putPersonId, HttpMethod.PUT);
    }

    public Response getPersonIdHistory(RequestSpecBuilder request){
        request.setBaseUri(getServicesBaseUrl());
        return sendRequest(request, getPersonIdHistory, HttpMethod.GET);
    }

    public Response getOrganisation(RequestSpecBuilder request){
        request.setBaseUri(getServicesBaseUrl());
        return sendRequest(request, getOrganisation, HttpMethod.GET);
    }

    public Response postOrganisation(RequestSpecBuilder request){
        request.setBaseUri(getServicesBaseUrl());
        return sendRequest(request, postOrganisation, HttpMethod.POST);
    }

    public Response putOrganisationId(RequestSpecBuilder request){
        request.setBaseUri(getServicesBaseUrl());
        return sendRequest(request, putOrganisationId, HttpMethod.PUT);
    }

    public Response getOrganisationIdHistory(RequestSpecBuilder request){
        request.setBaseUri(getServicesBaseUrl());
        return sendRequest(request, getOrganisationIdHistory, HttpMethod.GET);
    }

    public Response getOrganisationSearch(RequestSpecBuilder request){
        request.setBaseUri(getServicesBaseUrl());
        return sendRequest(request, getOrganisationSearch, HttpMethod.GET);
    }

}
