package com.cucumber.steps;


import com.service.*;
import com.support.session.ScenarioSession;
import com.support.session.SessionKey;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.response.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;

@ContextConfiguration(locations = "classpath:cucumber.xml")
public class BaseStep {

    @Autowired
    protected NdrListManagementApi ndrListManagementApi ;

    @Autowired
    protected AddressManagementApi addressManagementApi ;

    @Autowired
    protected AuthorisationSearchApi authorisationSearchApi ;

    @Autowired
    protected CustomerManagementApi customerManagementApi ;

    @Autowired
    protected AuthorisationManagementApi authorisationManagementApi ;

    @Autowired
    protected ExternalPropertyLinkManagementApi externalPropertyLinkManagementApi;

    @Autowired
    protected ScenarioSession scenarioSession;

    protected void assertLatestResponse(ResponseSpecBuilder expResults){
        Response response = (Response)scenarioSession.getData(SessionKey.LATEST_RESPONSE);
        expResults.build().validate(response);
    }
}
