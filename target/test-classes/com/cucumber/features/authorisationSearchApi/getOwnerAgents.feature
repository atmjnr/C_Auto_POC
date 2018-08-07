#*** /owners/{ownerId}/agents  ***

Feature: GET Owner Agents

  Scenario Outline: Get - Empty Parameters
    Given I have a new request with the following details
      | TYPE       | NAME    | VALUE     |
      | path_param | ownerId | <OwnerId> |

    When I send the request to Authorisation Search API 'GET Owner Agents' endpoint
    Then the status code <Response> is returned

    Examples:
      | OwnerId | Response |
      | 1234    | 200      |
      | abc     | 500      |