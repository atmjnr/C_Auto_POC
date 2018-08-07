Feature: POST Non Standard Address


  Scenario Outline: POST Non Standard Address - Mandatory fields only
    Given I have a new request with the following details
      | TYPE   | NAME         | VALUE            |
      | header | Content-Type | application/json |
    And I add a Create Non Standard Address json payload to my request with the following details
      | PARAM    | VALUE      |
      | postcode | <Postcode> |
    When I send the request to Address Management API 'POST Non Standard Address' endpoint
    Then the status code <Status> is returned
    And the field with jsonPath '<JsonPath>' contains the string '<Message>'

    Examples:
      | Postcode  | Status | JsonPath     | Message                         |
      | BN12 6EY  | 200    | message      | Success                         |
      | abcdefghi | 400    | errorMessage | (length: 9, maximum allowed: 8) |


    ###################################################


  Scenario: POST Non Standard Address - All fields Max Values
    Given I have a new request with the following details
      | TYPE   | NAME         | VALUE            |
      | header | Content-Type | application/json |
    And I add a Create Non Standard Address json payload to my request with the following details
      | PARAM                     | VALUE        |
      | postcode                  | Bn126EY      |
      | subBuildingName           | Test         |
      | organisationName          | TestOrg      |
      | thoroughfareName          | TestThorough |
      | buildingNumber            | 10           |
      | dependentLocality         | High Street  |
      | dependentThoroughfareName | J Jones      |
      | departmentName            | VOA          |
      | doubleDependentLocality   | W Sussex     |
    When I send the request to Address Management API 'POST Non Standard Address' endpoint
    Then the status code 200 is returned
    And the field with jsonPath 'message' contains the string 'Success'


    ###################################################


  Scenario: POST Non Standard Address - No Mandatory
    Given I have a new request with the following details
      | TYPE   | NAME         | VALUE            |
      | header | Content-Type | application/json |
    And I add a Create Non Standard Address json payload to my request with the following details
      | PARAM                     | VALUE        |
      | subBuildingName           | Test         |
      | organisationName          | TestOrg      |
      | thoroughfareName          | TestThorough |
      | buildingNumber            | 10           |
      | dependentLocality         | High Street  |
      | dependentThoroughfareName | J Jones      |
      | departmentName            | VOA          |
      | doubleDependentLocality   | W Sussex     |
    When I send the request to Address Management API 'POST Non Standard Address' endpoint
    Then the status code 400 is returned
    And the field with jsonPath 'errorMessage' contains the string 'object has missing required properties ([postcode])'


    ###################################################


  Scenario Outline: POST Non Standard Address - Params exceeded max characters
    Given I have a new request with the following details
      | TYPE   | NAME         | VALUE            |
      | header | Content-Type | application/json |
    And I add a Create Non Standard Address json payload to my request with the following details
      | PARAM    | VALUE   |
      | postcode | Bn126EY |
      | <PARAM>  | <VALUE> |
    When I send the request to Address Management API 'POST Non Standard Address' endpoint
    Then the status code 400 is returned
    And the field with jsonPath '<JSONPATH>' contains the string '<MESSAGE>'

    Examples:

      | PARAM                     | VALUE                                                                             | JSONPATH     | MESSAGE                           |
      | subBuildingName           | TestyTestyTestyTestyTestyTesty1                                                   | errorMessage | (length: 31, maximum allowed: 30) |
      | organisationName          | TestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTesty1 | errorMessage | (length: 81, maximum allowed: 80) |
      | thoroughfareName          | TestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTesty1 | errorMessage | (length: 81, maximum allowed: 80) |
      | buildingNumber            | TestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTesty1 | errorMessage | (length: 81, maximum allowed: 80) |
      | dependentLocality         | TestyTestyTestyTestyTestyTestyTesty1                                              | errorMessage | (length: 36, maximum allowed: 35) |
      | dependentThoroughfareName | TestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTesty1 | errorMessage | (length: 81, maximum allowed: 80) |
      | departmentName            | TestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTesty1                     | errorMessage | (length: 61, maximum allowed: 60) |
      | doubleDependentLocality   | TestyTestyTestyTestyTestyTestyTesty1                                              | errorMessage | (length: 36, maximum allowed: 35) |


    ###################################################


#
#  Scenario: POST Non Standard Address - subBuildingName exceeded (31)
#    Given I have a new request with the following details
#      | TYPE   | NAME         | VALUE            |
#      | header | Content-Type | application/json |
#    And I add a Create Non Standard Address json payload to my request with the following details
#      | PARAM           | VALUE                           |
#      | postcode        | Bn126EY                         |
#      | subBuildingName | TestyTestyTestyTestyTestyTesty1 |
#    When I send the request to Address Management API 'POST Non Standard Address' endpoint
#    Then the status code 400 is returned
#    And the field with jsonPath 'errorMessage' contains the string '(length: 31, maximum allowed: 30)'


    ###################################################

#
#  Scenario: POST Non Standard Address - organisationName exceeded (81)
#    Given I have a new request with the following details
#      | TYPE   | NAME         | VALUE            |
#      | header | Content-Type | application/json |
#    And I add a Create Non Standard Address json payload to my request with the following details
#      | PARAM            | VALUE                                                                             |
#      | postcode         | Bn126EY                                                                           |
#      | organisationName | TestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTesty1 |
#    When I send the request to Address Management API 'POST Non Standard Address' endpoint
#    Then the status code 400 is returned
#    And the field with jsonPath 'errorMessage' contains the string '(length: 81, maximum allowed: 80)'


    ###################################################


#  Scenario: POST Non Standard Address - thoroughfareName exceeded (81)
#    Given I have a new request with the following details
#      | TYPE   | NAME         | VALUE            |
#      | header | Content-Type | application/json |
#    And I add a Create Non Standard Address json payload to my request with the following details
#      | PARAM            | VALUE                                                                             |
#      | postcode         | Bn126EY                                                                           |
#      | thoroughfareName | TestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTesty1 |
#    When I send the request to Address Management API 'POST Non Standard Address' endpoint
#    Then the status code 400 is returned
#    And the field with jsonPath 'errorMessage' contains the string '(length: 81, maximum allowed: 80)'


    ###################################################

#
#  Scenario: POST Non Standard Address - buildingNumber exceeded (81)
#    Given I have a new request with the following details
#      | TYPE   | NAME         | VALUE            |
#      | header | Content-Type | application/json |
#    And I add a Create Non Standard Address json payload to my request with the following details
#      | PARAM          | VALUE                                                                             |
#      | postcode       | Bn126EY                                                                           |
#      | buildingNumber | TestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTesty1 |
#    When I send the request to Address Management API 'POST Non Standard Address' endpoint
#    Then the status code 400 is returned
#    And the field with jsonPath 'errorMessage' contains the string '(length: 81, maximum allowed: 80)'


    ###################################################


#  Scenario: POST Non Standard Address - dependentLocality exceeded (36)
#    Given I have a new request with the following details
#      | TYPE   | NAME         | VALUE            |
#      | header | Content-Type | application/json |
#    And I add a Create Non Standard Address json payload to my request with the following details
#      | PARAM             | VALUE                                |
#      | postcode          | Bn126EY                              |
#      | dependentLocality | TestyTestyTestyTestyTestyTestyTesty1 |
#    When I send the request to Address Management API 'POST Non Standard Address' endpoint
#    Then the status code 400 is returned
#    And the field with jsonPath 'errorMessage' contains the string '(length: 36, maximum allowed: 35)'


    ###################################################


#  Scenario: POST Non Standard Address - dependentThoroughfareName exceeded (81)
#    Given I have a new request with the following details
#      | TYPE   | NAME         | VALUE            |
#      | header | Content-Type | application/json |
#    And I add a Create Non Standard Address json payload to my request with the following details
#      | PARAM                     | VALUE                                                                             |
#      | postcode                  | Bn126EY                                                                           |
#      | dependentThoroughfareName | TestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTesty1 |
#    When I send the request to Address Management API 'POST Non Standard Address' endpoint
#    Then the status code 400 is returned
#    And the field with jsonPath 'errorMessage' contains the string '(length: 81, maximum allowed: 80)'


    ###################################################


#  Scenario: POST Non Standard Address - departmentName exceeded (61)
#    Given I have a new request with the following details
#      | TYPE   | NAME         | VALUE            |
#      | header | Content-Type | application/json |
#    And I add a Create Non Standard Address json payload to my request with the following details
#      | PARAM          | VALUE                                                         |
#      | postcode       | Bn126EY                                                       |
#      | departmentName | TestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTestyTesty1 |
#    When I send the request to Address Management API 'POST Non Standard Address' endpoint
#    Then the status code 400 is returned
#    And the field with jsonPath 'errorMessage' contains the string '(length: 61, maximum allowed: 60)'


    ###################################################


#  Scenario: POST Non Standard Address - doubleDependentLocality exceeded (36)
#    Given I have a new request with the following details
#      | TYPE   | NAME         | VALUE            |
#      | header | Content-Type | application/json |
#    And I add a Create Non Standard Address json payload to my request with the following details
#      | PARAM                   | VALUE                                |
#      | postcode                | Bn126EY                              |
#      | doubleDependentLocality | TestyTestyTestyTestyTestyTestyTesty1 |
#    When I send the request to Address Management API 'POST Non Standard Address' endpoint
#    Then the status code 400 is returned
#    And the field with jsonPath 'errorMessage' contains the string '(length: 36, maximum allowed: 35)'