Feature: PATCH Authorisation ID

  Scenario Outline: PATCH Authorisation - Valid - Status/Capacity
    Given I have a new request with the following details
      | TYPE       | NAME            | VALUE            |
      | header     | Content-Type    | application/json |
      | path_param | authorisationId | 110              |
    And I add a Create Authorisation PATCH json payload to my request with the following details
      | PARAM                      | VALUE      |
      | authorisationStatus        | <Status>   |
      | authorisationOwnerCapacity | <Capacity> |
    When I send the request to Authorisation Management API 'PATCH Authorisation ID' endpoint
    Then the status code 200 is returned
    And I have a new request with the following details
      | TYPE       | NAME            | VALUE |
      | path_param | authorisationId | 110   |
    And I send the request to Authorisation Management API 'GET Authorisation ID' endpoint
    And the following fields and their values are returned successfully
      | FIELD                      | MATCHER      | VALUE      |
      | id                         | equalsNumber | 110        |
      | authorisationStatus        | equals       | <Status>   |
      | authorisationOwnerCapacity | equals       | <Capacity> |

    Examples:
      | Status                 | Capacity       |
      | APPROVED               | OWNER          |
      | PENDING                | OCCUPIER       |
      | MORE_EVIDENCE_REQUIRED | OWNER_OCCUPIER |
      | DECLINED               | OWNER          |
      | REVOKED                | OCCUPIER       |


    ####################################################


  Scenario: PATCH Authorisation - Invalid - Amend Create Date
    Given I have a new request with the following details
      | TYPE       | NAME            | VALUE            |
      | header     | Content-Type    | application/json |
      | path_param | authorisationId | 110              |
    And I add a Create Authorisation PATCH json payload to my request with the following details
      | PARAM          | VALUE                        |
      | createDatetime | 2016-08-01T12:53:51.000+0000 |
    When I send the request to Authorisation Management API 'PATCH Authorisation ID' endpoint
    Then the status code 200 is returned
    #Why does it give a 200 instead of an error when it doesnt actually change the record?
    And I have a new request with the following details
      | TYPE       | NAME            | VALUE |
      | path_param | authorisationId | 110   |
    And I send the request to Authorisation Management API 'GET Authorisation ID' endpoint
    And the following fields and their values are returned successfully
      | FIELD          | MATCHER      | VALUE                        |
      | id             | equalsNumber | 110                          |
      | createDatetime | equals       | 2016-07-01T12:53:51.000+0000 |