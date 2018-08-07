Feature: GET Address

  Scenario Outline: Get Address - Valid, Not Found, Invalid
    Given I have a new request with the following details
      | TYPE       | NAME          | VALUE       |
      | path_param | addressUnitId | <AddressId> |
    When I send the request to Address Management API 'GET AddressUnitId' endpoint
    Then the status code <Response> is returned

    Examples:
      | AddressId | Response |
      | 152533    | 200      |
      | abc123    | 400      |
      | 999999    | 404      |