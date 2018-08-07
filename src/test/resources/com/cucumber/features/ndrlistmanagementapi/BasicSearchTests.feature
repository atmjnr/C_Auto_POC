
  Feature: Ensure the NDR List Management API - Basic Search endpoint


    Scenario Outline: Ensure the NDR List Management Basic Search postcode search works correctly
      Given I have a new request with the following details
        | TYPE          | NAME       | VALUE                         |
        | header        | Accept     | application/vnd.hmrc.1.0+json |
        | path_param    | listYear   | 2017                          |
        | request_param | postcode   | <postcode>                    |
        | request_param | sortField  | BA_REF                        |
        | request_param | startPoint | 1                             |
      When I send the request to NDR List Management API 'GET Basic Search' endpoint
      Then the status code 200 is returned
      And all of the fields returned with jsonPath 'NDRListItems.address' contains the string '<postcode>'

      @ppe
    Examples:
      | postcode |
      | LS1      |
      | SL1      |



    Scenario: Asserting multiple values of the Basic Search response
      Given I have a new request with the following details
        | TYPE          | NAME                        | VALUE                         |
        | header        | Accept                      | application/vnd.hmrc.1.0+json |
        | path_param    | listYear                    | 2017                          |
        | request_param | billingAuthorityReference   | 014726                        |
        | request_param | startPoint                  | 1                             |
      When I send the request to NDR List Management API 'GET Basic Search' endpoint
      Then the status code 200 is returned
      And the following fields and their values are returned successfully
        | FIELD                                      | MATCHER       | VALUE                                                              |
        | NDRListItems[0].asstRef                    | equalsNumber  | 16500965000                                                        |
        | NDRListItems[0].uarn                       | equalsNumber  | 9942982000                                                         |
        | NDRListItems[0].billingAuthorityReference  | equals        | 014726                                                             |
        | NDRListItems[0].address                    | equals        | SHOP AT HONEYSUCKLE COTTAGE APPERLEY LANE, RAWDON, LEEDS, LS19 7DX |
        | NDRListItems[0].description                | equals        | SHOP AND PREMISES                                                  |
        | NDRListItems[0].specialCategoryCode        | equals        | 249G                                                               |
        | NDRListItems[0].compositeProperty          | equals        | Y                                                                  |
        | NDRListItems[0].effectiveFromDate          | equals        | 2018-06-28                                                         |
        | NDRListItems[0].listAlterationDate         | equals        | 2018-06-28                                                         |
        | NDRListItems[0].rateableValue              | equalsNumber  | 72571                                                              |


    Scenario Outline: Negative testing of NDR List Management Basic Search parameters
      Given I have the test <test>
      And I have a new request with the following details
        | TYPE          | NAME             | VALUE                         |
        | header        | Accept           | application/vnd.hmrc.1.0+json |
        | path_param    | listYear         | 2017                          |
        | request_param | billingAuthRef   | <billingAuthRef>              |
        | request_param | pageSize         | <pageSize>                    |
        | request_param | postcode         | <postcode>                    |
        | request_param | reqTotalRowCount | <reqTotalRowCount>            |
        | request_param | sortDesc         | <sortDesc>                    |
        | request_param | sortField        | <sortField>                   |
        | request_param | startPoint       | <startPoint>                  |
      When I send the request to NDR List Management API 'GET Basic Search' endpoint
      Then the status code 400 is returned
      And the field with jsonPath 'errorMessage' is equal to '<msg>'

    Examples:
      | test                               | billingAuthRef | pageSize | postcode | reqTotalRowCount | sortDesc | sortField | startPoint | msg                                                                                                                                                                                 |
      | mandatory startPoint value missing |                |          |          |                  |          |           |            | org.mule.api.MessagingException: Invalid value '' for query parameter startPoint. Integer required (org.mule.module.apikit.exception.InvalidQueryParameterException).               |
      | pageSize = 0                       |                | 0        | ex1      |                  |          |           | 1          | org.mule.api.MessagingException: Invalid value '0' for query parameter pageSize. Value is below the minimum 1 (org.mule.module.apikit.exception.InvalidQueryParameterException).    |
      | pageSize = -1                      |                | -1       | ex1      |                  |          |           | 1          | org.mule.api.MessagingException: Invalid value '-1' for query parameter pageSize. Value is below the minimum 1 (org.mule.module.apikit.exception.InvalidQueryParameterException).   |
      | missing mandatory param postcode   |                | 1        |          |                  |          |           | 1          | VOAException Postcode entry too short:                                                                                                                                              |
