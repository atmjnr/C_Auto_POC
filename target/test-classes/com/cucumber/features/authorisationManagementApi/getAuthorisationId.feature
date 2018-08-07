Feature: GET Authorisation ID

  Scenario Outline: GET Authorisation
    Given I have a new request with the following details
      | TYPE       | NAME            | VALUE             |
      | path_param | authorisationId | <AuthorisationId> |
    When I send the request to Authorisation Management API 'GET Authorisation ID' endpoint
    Then the status code <Response> is returned
    And the field with jsonPath '<JsonPath>' contains the string '<Message>'


    Examples:
      | AuthorisationId | Response | JsonPath      | Message                 |
      | 110             | 200      | submissionId  | ABC99003                |
      | 9999            | 404      | errorTypeDesc | Authorisation not found |
      | abc123          | 400      | errorTypeDesc | ID not numeric          |