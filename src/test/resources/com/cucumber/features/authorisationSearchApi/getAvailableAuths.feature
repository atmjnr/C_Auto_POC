#*** /owners/{ownerId}/agents/{agentId}/availableAuthorisations ***

Feature: GET Available Authorisations

  Scenario Outline: Get - Empty Parameters
    Given I have a new request with the following details
      | TYPE       | NAME    | VALUE     |
      | path_param | agentId | <AgentId> |
      | path_param | ownerId | <OwnerId> |

    When I send the request to Authorisation Search API 'GET Available Authorisations' endpoint
    Then the status code <Response> is returned

    Examples:
      | AgentId | OwnerId | Response |
      | 1231    | 1111    | 200      |
      | abc     | 1111    | 400      |
      | 1231    | abc     | 400      |


    ###################################################


  Scenario Outline: Get - With Parameters
    Given I have a new request with the following details
      | TYPE          | NAME      | VALUE       |
      | path_param    | agentId   | 1222        |
      | path_param    | ownerId   | 1211        |
      | request_param | address   | <address>   |
      | request_param | agent     | <agent>     |
      | request_param | challenge | <challenge> |
      | request_param | check     | <check>     |
      | request_param | size      | <size>      |
      | request_param | sortfield | <sortfield> |
      | request_param | sortorder | <sortorder> |
      | request_param | start     | <start>     |
    When I send the request to Authorisation Search API 'GET Available Authorisations' endpoint
    Then the status code <Response> is returned

    Examples:
      | address | agent | challenge          | check              | size | sortfield | sortorder | start | Response |
      | abc     | 123   | START_AND_CONTINUE | START_AND_CONTINUE | 1    | ADDRESS   | ASC       | 1     | 200      |
      | abc     | 123   | START_AND_CONTINUE | START_AND_CONTINUE | 1    | AGENT     | DESC      | 1     | 200      |
      | abc     | 123   | START_AND_CONTINUE | START_AND_CONTINUE | 1    | ADDRESS   | ASC       | 1     | 200      |
      |         | 123   | START_AND_CONTINUE | START_AND_CONTINUE | 1    | ADDRESS   | ASC       | 1     | 200      |
      | abc     |       | START_AND_CONTINUE | START_AND_CONTINUE | 1    | ADDRESS   | ASC       | 1     | 200      |
      | abc     | 123   | INVALID            | START_AND_CONTINUE | 1    | ADDRESS   | ASC       | 1     | 400      |
      | abc     | 123   | START_AND_CONTINUE | INVALID            | 1    | AGENT     | DESC      | 1     | 400      |
      | abc     | 123   | START_AND_CONTINUE | START_AND_CONTINUE | 1    | INVALID   | ASC       | 1     | 400      |
      | abc     | 123   | START_AND_CONTINUE | START_AND_CONTINUE | 1    | AGENT     | INVALID   | 1     | 400      |
