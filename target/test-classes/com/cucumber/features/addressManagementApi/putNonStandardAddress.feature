Feature: PUT Non Standard Address

  Scenario Outline: PUT Non Standard Address
    Given I have a new request with the following details
      | TYPE       | NAME          | VALUE            |
      | header     | Content-Type  | application/json |
      | path_param | addressUnitId | <1>              |
    And I add a Create Non Standard Address json payload to my request with the following details
      | PARAM                     | VALUE |
      | postcode                  | <2>   |
      | subBuildingName           | <3>   |
      | organisationName          | <4>   |
      | thoroughfareName          | <5>   |
      | buildingNumber            | <6>   |
      | dependentLocality         | <7>   |
      | dependentThoroughfareName | <8>   |
      | departmentName            | <9>   |
      | doubleDependentLocality   | <10>  |
    When I send the request to Address Management API 'PUT Non Standard Address' endpoint
    Then the status code 200 is returned
    And I have a new request with the following details
      | TYPE       | NAME          | VALUE |
      | path_param | addressUnitId | <1>   |
    And I send the request to Address Management API 'GET AddressUnitId' endpoint
    And the following fields and their values are returned successfully
      | FIELD                                       | MATCHER      | VALUE |
      | addressDetails[0].addressUnitId             | equalsNumber | <1>   |
      | addressDetails[0].postcode                  | equals       | <2>   |
      | addressDetails[0].subBuildingName           | equals       | <3>   |
      | addressDetails[0].organisationName          | equals       | <4>   |
      | addressDetails[0].thoroughfareName          | equals       | <5>   |
      | addressDetails[0].buildingNumber            | equals       | <6>   |
      | addressDetails[0].dependentLocality         | equals       | <7>   |
      | addressDetails[0].dependentThoroughfareName | equals       | <8>   |
      | addressDetails[0].departmentName            | equals       | <9>   |
      | addressDetails[0].doubleDependentLocality   | equals       | <10>  |

    Examples:
      | 1      | 2        | 3      | 4         | 5              | 6    | 7             | 8         | 9     | 10         |
      | 152658 | Bn126W_O | Test_O | TestOrg_O | TestThorough_O | 10_O | High Street_O | J Jones_O | VOA_O | W Sussex_O |
      | 152658 | Bn126W_1 | Test_1 | TestOrg_1 | TestThorough_1 | 10_1 | High Street_1 | J Jones_1 | VOA_1 | W Sussex_1 |



