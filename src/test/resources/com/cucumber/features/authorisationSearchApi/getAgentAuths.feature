Feature: GET Agent Authorisations

  Scenario Outline: Get - Empty Parameters
    Given I have a new request with the following details
      | TYPE       | NAME    | VALUE     |
      | path_param | agentId | <AgentId> |
    When I send the request to Authorisation Search API 'GET Agent Authorisations' endpoint
    Then the status code <Response> is returned

    Examples:
      | AgentId | Response |
      | 1222    | 200      |
      | abc123  | 500      |


    ###################################################


  Scenario Outline: Get - With Parameters - Valid
    Given I have a new request with the following details
      | TYPE          | NAME                 | VALUE       |
      | path_param    | agentId              | 1222        |
      | request_param | address              | 12          |
      | request_param | baref                | 1212        |
      | request_param | client               | 12          |
      | request_param | representationStatus | <repstatus> |
      | request_param | size                 | 12          |
      | request_param | sortfield            | <sortfield> |
      | request_param | sortorder            | <order>     |
      | request_param | start                | <start>     |
      | request_param | status               | <status>    |
    When I send the request to Authorisation Search API 'GET Agent Authorisations' endpoint
    Then the status code <response> is returned

    Examples:
      | repstatus | sortfield             | order | start | status                 | response |
      | APPROVED  | ADDRESS               | ASC   | 1     | APPROVED               | 200      |
      | DECLINED  | BAREF                 | DESC  | 1     | DECLINED               | 200      |
      | REVOKED   | CLIENT                | ASC   | 1     | REVOKED                | 200      |
      | PENDING   | CLIENT                | DESC  | 10    | PENDING                | 200      |
      | TIMED_OUT | STATUS                | ASC   | 10    | MORE_EVIDENCE_REQUIRED | 200      |
      | TIMED_OUT | REPRESENTATION_STATUS | DESC  | 10    | ALL                    | 200      |
      | ALL       | ADDRESS               | ASC   | 10    | ALL                    | 200      |


    ###################################################


  Scenario Outline: Get - With Parameters - Invalid
    Given I have a new request with the following details
      | TYPE          | NAME                 | VALUE       |
      | path_param    | agentId              | 1222        |
      | request_param | address              | 12          |
      | request_param | baref                | 1212        |
      | request_param | client               | 12          |
      | request_param | representationStatus | <repstatus> |
      | request_param | size                 | 12          |
      | request_param | sortfield            | <sortfield> |
      | request_param | sortorder            | <order>     |
      | request_param | start                | <start>     |
      | request_param | status               | <status>    |
    When I send the request to Authorisation Search API 'GET Agent Authorisations' endpoint
    Then the status code <response> is returned
    And the field with jsonPath 'errorMessage' is equal to '<msg>'

    Examples:
      | repstatus | sortfield | order   | start | status  | response | msg                                                                                                                                                                                                                                               |
      | INVALID   | BAREF     | DESC    | 10    | ALL     | 400      | org.mule.api.MessagingException: Invalid value 'INVALID' for query parameter representationStatus. Value must be one of [APPROVED, DECLINED, REVOKED, PENDING, TIMED_OUT, ALL] (org.mule.module.apikit.exception.InvalidQueryParameterException). |
      | ALL       | INVALID   | DESC    | 10    | ALL     | 400      | org.mule.api.MessagingException: Invalid value 'INVALID' for query parameter sortfield. Value must be one of [ADDRESS, BAREF, CLIENT, STATUS, REPRESENTATION_STATUS] (org.mule.module.apikit.exception.InvalidQueryParameterException).           |
      | ALL       | BAREF     | INVALID | 10    | ALL     | 400      | org.mule.api.MessagingException: Invalid value 'INVALID' for query parameter sortorder. Value must be one of [ASC, DESC] (org.mule.module.apikit.exception.InvalidQueryParameterException).                                                       |
      | ALL       | BAREF     | DESC    | 10    | INVALID | 400      | org.mule.api.MessagingException: Invalid value 'INVALID' for query parameter status. Value must be one of [APPROVED, DECLINED, REVOKED, PENDING, MORE_EVIDENCE_REQUIRED, ALL] (org.mule.module.apikit.exception.InvalidQueryParameterException).  |