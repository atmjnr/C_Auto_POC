
  Feature: Ensure the External Property Link Api - Create Property Link endpoint works correctly

    Scenario: Ensure I can create a property link successfully
      Given I have a new request with the following details
        | TYPE          | NAME           | VALUE                                    |
#        | header        | Accept         | application/vnd.hmrc.1.0+json            |
        | header        | Content-Type   | application/json                         |
#        | header        | gg-external-id | Ext-45f2daf6-3f15-48a2-b5fc-cd5d8d1ce074 |
#        | header        | gg-group-id    | 8c1d5766-7b43-41e4-9e4f-25058db3e628     |
      And I add a Create Property Link json payload to my request with the following details
        | uarn            | 308096244                       |
        | capacity        | OCCUPIER                        |
        | method          | SELF_CERTIFY                    |
        | PLsubmissionId  | 123                             |
      When I send the request to the External Property Link Management Api to create the property link
      Then the status code 202 is returned




