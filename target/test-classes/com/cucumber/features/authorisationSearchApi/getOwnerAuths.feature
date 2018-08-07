#*** /owners/{ownerId}/authorisations  ***

Feature: GET Owner Authorisations

  Scenario Outline: Get - Empty Parameters
    Given I have a new request with the following details
      | TYPE       | NAME    | VALUE     |
      | path_param | ownerId | <OwnerId> |

    When I send the request to Authorisation Search API 'GET Owner Authorisations' endpoint
    Then the status code <Response> is returned

    Examples:
      | OwnerId | Response |
      | 1222    | 200      |
      | abc123  | 500      |


    ###################################################


  Scenario Outline: Get - All Parameters populated
    Given I have a new request with the following details
      | TYPE          | NAME                 | VALUE       |
      | path_param    | ownerId              | 1222        |
      | request_param | address              | <address>   |
      | request_param | baref                | <baref>     |
      | request_param | client               | <client>    |
      | request_param | representationStatus | <repstatus> |
      | request_param | size                 | <size>      |
      | request_param | sortfield            | <sortfield> |
      | request_param | sortorder            | <order>     |
      | request_param | start                | <start>     |
      | request_param | status               | <status>    |

    When I send the request to Authorisation Search API 'GET Owner Authorisations' endpoint
    Then the status code <Response> is returned

    Examples:
      | address | baref | client | repstatus              | size | sortfield | order   | start | status                 | Response |
      | 12      | 1212  | 12     | APPROVED               | 12   | ADDRESS   | ASC     | 1     | APPROVED               | 200      |
      | 12      | 1212  | 12     | DECLINED               | 12   | BAREF     | DESC    | 1     | DECLINED               | 200      |
      | 12      | 1212  | 12     | REVOKED                | 12   | AGENT     | ASC     | 1     | REVOKED                | 200      |
      | 12      | 1212  | 12     | PENDING                | 12   | STATUS    | DESC    | 10    | PENDING                | 200      |
      | 12      | 1212  | 12     | MORE_EVIDENCE_REQUIRED | 12   | ADDRESS   | ASC     | 10    | MORE_EVIDENCE_REQUIRED | 200      |
      | 12      | 1212  | 12     | TIMED_OUT              | 12   | BAREF     | DESC    | 10    | ALL                    | 200      |
      | 12      | 1212  | 12     | ALL                    | 12   | AGENT     | ASC     | 10    | ALL                    | 200      |
#      | 12    |1212 | 12   |INVALID               |12  | BAREF   |DESC   |  10 |ALL                    |  400   |
      | 12      | 1212  | 12     | ALL                    | 12   | INVALID   | DESC    | 10    | ALL                    | 400      |
      | 12      | 1212  | 12     | ALL                    | 12   | BAREF     | INVALID | 10    | ALL                    | 400      |
      | 12      | 1212  | 12     | ALL                    | 12   | BAREF     | DESC    | 10    | INVALID                | 400      |


