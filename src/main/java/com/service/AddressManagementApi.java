package com.service;


import com.enums.HttpMethod;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.response.Response;
import org.springframework.stereotype.Component;

    @Component
    public class AddressManagementApi extends BaseService{


        // Variable for each Endpoint
        private static final String getAddressUnitId = "/address-management-api/address/{addressUnitId}";
        private static final String postNonStandardAddress = "/address-management-api/address/non_standard_address";
        private static final String putNonStandardAddress = "/address-management-api/address/non_standard_address/{addressUnitId}";





        // Response for each Endpoint

        public Response getAddressUnitId(RequestSpecBuilder request){
            request.setBaseUri(getServicesBaseUrl());
            return sendRequest(request, getAddressUnitId, HttpMethod.GET);
        }


        public Response postNonStandardAddress(RequestSpecBuilder request){
            request.setBaseUri(getServicesBaseUrl());
            return sendRequest(request, postNonStandardAddress, HttpMethod.POST);
        }


        public Response putNonStandardAddress(RequestSpecBuilder request){
            request.setBaseUri(getServicesBaseUrl());
            return sendRequest(request, putNonStandardAddress, HttpMethod.PUT);
        }


    }

