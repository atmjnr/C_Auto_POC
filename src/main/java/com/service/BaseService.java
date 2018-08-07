package com.service;


import io.restassured.builder.RequestSpecBuilder;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.config.RestAssuredConfig;
import io.restassured.response.Response;

import com.enums.HttpMethod;
import io.restassured.specification.ResponseSpecification;
import org.springframework.beans.factory.annotation.Value;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import java.io.UnsupportedEncodingException;

import static io.restassured.RestAssured.given;
import static io.restassured.config.LogConfig.logConfig;
import static org.hamcrest.CoreMatchers.anything;

public class BaseService {

    @Value("${modernised.baseurl}")
    private String servicesBaseUrl;

    protected String getServicesBaseUrl() {
        return servicesBaseUrl;
    }

    protected Response sendRequest(RequestSpecBuilder requestSpec, String endpoint, HttpMethod httpMethod) {
        ByteArrayOutputStream os = new ByteArrayOutputStream();
        PrintStream ps = new PrintStream(os);

        RestAssuredConfig config = new RestAssuredConfig();
        config = config.logConfig(logConfig().defaultStream(ps));

        Response response = null;

        switch (httpMethod) {
            case GET:
                response = given().config(config).log().all().urlEncodingEnabled(false).spec(requestSpec.build()).expect().spec(buildEmptyResponseSpec()).with().get(endpoint);
                break;
            case POST:
                response = given().config(config).log().all().urlEncodingEnabled(false).spec(requestSpec.build()).expect().spec(buildEmptyResponseSpec()).with().post(endpoint);
                break;
            case PUT:
                response = given().config(config).log().all().urlEncodingEnabled(false).spec(requestSpec.build()).expect().spec(buildEmptyResponseSpec()).with().put(endpoint);
                break;
            case DELETE:
                response = given().config(config).log().all().urlEncodingEnabled(false).spec(requestSpec.build()).expect().spec(buildEmptyResponseSpec()).with().delete(endpoint);
                break;
            case PATCH:
                response = given().config(config).log().all().urlEncodingEnabled(false).spec(requestSpec.build()).expect().spec(buildEmptyResponseSpec()).with().patch(endpoint);
                break;
        }

        //get the request details from the print stream
        String requestDetails = getRequestDetails(os, ps);

        //print request details
        System.out.println("\n" + requestDetails);

        //print response details
        System.out.println("\n\n" + response.prettyPrint());

        return response;
    }

    private static ResponseSpecification buildEmptyResponseSpec() {
        return new ResponseSpecBuilder().expectBody(anything()).build();
    }

    private String getRequestDetails(ByteArrayOutputStream os, PrintStream ps) {

        String requestString = null;
        try {
            requestString = os.toString("UTF8");
            ps.close();

        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }

        return requestString;
    }


}
