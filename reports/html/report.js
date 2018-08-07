$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("externalpropertylinkmanagementapi/CreatePropertyLink.feature");
formatter.feature({
  "line": 2,
  "name": "Ensure the External Property Link Api - Create Property Link endpoint works correctly",
  "description": "",
  "id": "ensure-the-external-property-link-api---create-property-link-endpoint-works-correctly",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8471533,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Ensure I can create a property link successfully",
  "description": "",
  "id": "ensure-the-external-property-link-api---create-property-link-endpoint-works-correctly;ensure-i-can-create-a-property-link-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I have a new request with the following details",
  "rows": [
    {
      "cells": [
        "TYPE",
        "NAME",
        "VALUE"
      ],
      "line": 6
    },
    {
      "cells": [
        "header",
        "Accept",
        "application/vnd.hmrc.1.0+json"
      ],
      "line": 7
    },
    {
      "cells": [
        "header",
        "Content-Type",
        "application/json"
      ],
      "line": 8
    },
    {
      "cells": [
        "header",
        "gg-external-id",
        "Ext-45f2daf6-3f15-48a2-b5fc-cd5d8d1ce074"
      ],
      "line": 9
    },
    {
      "cells": [
        "header",
        "gg-group-id",
        "8c1d5766-7b43-41e4-9e4f-25058db3e628"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I add a Create Property Link json payload to my request with the following details",
  "rows": [
    {
      "cells": [
        "uarn",
        "308096244"
      ],
      "line": 12
    },
    {
      "cells": [
        "capacity",
        "OCCUPIER"
      ],
      "line": 13
    },
    {
      "cells": [
        "method",
        "SELF_CERTIFY"
      ],
      "line": 14
    },
    {
      "cells": [
        "PLsubmissionId",
        "123"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I send the request to the External Property Link Management Api to create the property link",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the status code 202 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.addRequestDetails(DataTable)"
});
formatter.result({
  "duration": 336178417,
  "status": "passed"
});
formatter.match({
  "location": "CreatePropertyLinkSteps.createPropertyLinkPayload(String,String\u003e)"
});
formatter.result({
  "duration": 22556634,
  "status": "passed"
});
formatter.match({
  "location": "CreatePropertyLinkSteps.createPropertyLink()"
});
formatter.result({
  "duration": 748839621,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "202",
      "offset": 16
    }
  ],
  "location": "CommonSteps.assertStatusCode(int)"
});
formatter.result({
  "duration": 35567364,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c202\u003e but was \u003c400\u003e.\n\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:60)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:235)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:483)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\n\tat io.restassured.internal.ResponseSpecificationImpl.validate(ResponseSpecificationImpl.groovy:89)\n\tat com.cucumber.steps.BaseStep.assertLatestResponse(BaseStep.java:27)\n\tat com.cucumber.steps.CommonSteps.assertStatusCode(CommonSteps.java:99)\n\tat ✽.Then the status code 202 is returned(externalpropertylinkmanagementapi/CreatePropertyLink.feature:17)\n",
  "status": "failed"
});
formatter.after({
  "duration": 99687,
  "status": "passed"
});
formatter.uri("ndrlistmanagementapiold/BasicSearchTests.feature");
formatter.feature({
  "line": 2,
  "name": "Ensure the NDR List Management API - Basic Search endpoint",
  "description": "",
  "id": "ensure-the-ndr-list-management-api---basic-search-endpoint",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Ensure the NDR List Management Basic Search postcode search works correctly",
  "description": "",
  "id": "ensure-the-ndr-list-management-api---basic-search-endpoint;ensure-the-ndr-list-management-basic-search-postcode-search-works-correctly",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I have a new request with the following details",
  "rows": [
    {
      "cells": [
        "TYPE",
        "NAME",
        "VALUE"
      ],
      "line": 7
    },
    {
      "cells": [
        "header",
        "Accept",
        "application/vnd.hmrc.1.0+json"
      ],
      "line": 8
    },
    {
      "cells": [
        "path_param",
        "listYear",
        "2017"
      ],
      "line": 9
    },
    {
      "cells": [
        "request_param",
        "postcode",
        "\u003cpostcode\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "request_param",
        "sortField",
        "BA_REF"
      ],
      "line": 11
    },
    {
      "cells": [
        "request_param",
        "startPoint",
        "1"
      ],
      "line": 12
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I send the request to NDR List Management API \u0027GET Basic Search\u0027 endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the status code 200 is returned",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "all of the fields returned with jsonPath \u0027NDRListItems.address\u0027 contains the string \u0027\u003cpostcode\u003e\u0027",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "ensure-the-ndr-list-management-api---basic-search-endpoint;ensure-the-ndr-list-management-basic-search-postcode-search-works-correctly;",
  "rows": [
    {
      "cells": [
        "postcode"
      ],
      "line": 18,
      "id": "ensure-the-ndr-list-management-api---basic-search-endpoint;ensure-the-ndr-list-management-basic-search-postcode-search-works-correctly;;1"
    },
    {
      "cells": [
        "LS1"
      ],
      "line": 19,
      "id": "ensure-the-ndr-list-management-api---basic-search-endpoint;ensure-the-ndr-list-management-basic-search-postcode-search-works-correctly;;2"
    },
    {
      "cells": [
        "SL1"
      ],
      "line": 20,
      "id": "ensure-the-ndr-list-management-api---basic-search-endpoint;ensure-the-ndr-list-management-basic-search-postcode-search-works-correctly;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 253500,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Ensure the NDR List Management Basic Search postcode search works correctly",
  "description": "",
  "id": "ensure-the-ndr-list-management-api---basic-search-endpoint;ensure-the-ndr-list-management-basic-search-postcode-search-works-correctly;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I have a new request with the following details",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "TYPE",
        "NAME",
        "VALUE"
      ],
      "line": 7
    },
    {
      "cells": [
        "header",
        "Accept",
        "application/vnd.hmrc.1.0+json"
      ],
      "line": 8
    },
    {
      "cells": [
        "path_param",
        "listYear",
        "2017"
      ],
      "line": 9
    },
    {
      "cells": [
        "request_param",
        "postcode",
        "LS1"
      ],
      "line": 10
    },
    {
      "cells": [
        "request_param",
        "sortField",
        "BA_REF"
      ],
      "line": 11
    },
    {
      "cells": [
        "request_param",
        "startPoint",
        "1"
      ],
      "line": 12
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I send the request to NDR List Management API \u0027GET Basic Search\u0027 endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the status code 200 is returned",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "all of the fields returned with jsonPath \u0027NDRListItems.address\u0027 contains the string \u0027LS1\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.addRequestDetails(DataTable)"
});
formatter.result({
  "duration": 14928798,
  "status": "passed"
});
formatter.match({
  "location": "NDRListManagementSteps.getBasicSearch()"
});
formatter.result({
  "duration": 382638936,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 16
    }
  ],
  "location": "CommonSteps.assertStatusCode(int)"
});
formatter.result({
  "duration": 1120812,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NDRListItems.address",
      "offset": 42
    },
    {
      "val": "LS1",
      "offset": 85
    }
  ],
  "location": "CommonSteps.assertJsonField(String,String)"
});
formatter.result({
  "duration": 325279730,
  "status": "passed"
});
formatter.after({
  "duration": 29223,
  "status": "passed"
});
formatter.before({
  "duration": 124538,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Ensure the NDR List Management Basic Search postcode search works correctly",
  "description": "",
  "id": "ensure-the-ndr-list-management-api---basic-search-endpoint;ensure-the-ndr-list-management-basic-search-postcode-search-works-correctly;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I have a new request with the following details",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "TYPE",
        "NAME",
        "VALUE"
      ],
      "line": 7
    },
    {
      "cells": [
        "header",
        "Accept",
        "application/vnd.hmrc.1.0+json"
      ],
      "line": 8
    },
    {
      "cells": [
        "path_param",
        "listYear",
        "2017"
      ],
      "line": 9
    },
    {
      "cells": [
        "request_param",
        "postcode",
        "SL1"
      ],
      "line": 10
    },
    {
      "cells": [
        "request_param",
        "sortField",
        "BA_REF"
      ],
      "line": 11
    },
    {
      "cells": [
        "request_param",
        "startPoint",
        "1"
      ],
      "line": 12
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I send the request to NDR List Management API \u0027GET Basic Search\u0027 endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the status code 200 is returned",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "all of the fields returned with jsonPath \u0027NDRListItems.address\u0027 contains the string \u0027SL1\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.addRequestDetails(DataTable)"
});
formatter.result({
  "duration": 1579468,
  "status": "passed"
});
formatter.match({
  "location": "NDRListManagementSteps.getBasicSearch()"
});
formatter.result({
  "duration": 252707931,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 16
    }
  ],
  "location": "CommonSteps.assertStatusCode(int)"
});
formatter.result({
  "duration": 493445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NDRListItems.address",
      "offset": 42
    },
    {
      "val": "SL1",
      "offset": 85
    }
  ],
  "location": "CommonSteps.assertJsonField(String,String)"
});
formatter.result({
  "duration": 39692902,
  "status": "passed"
});
formatter.after({
  "duration": 36989,
  "status": "passed"
});
formatter.before({
  "duration": 119315,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Asserting multiple values of the Basic Search response",
  "description": "",
  "id": "ensure-the-ndr-list-management-api---basic-search-endpoint;asserting-multiple-values-of-the-basic-search-response",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "I have a new request with the following details",
  "rows": [
    {
      "cells": [
        "TYPE",
        "NAME",
        "VALUE"
      ],
      "line": 25
    },
    {
      "cells": [
        "header",
        "Accept",
        "application/vnd.hmrc.1.0+json"
      ],
      "line": 26
    },
    {
      "cells": [
        "path_param",
        "listYear",
        "2017"
      ],
      "line": 27
    },
    {
      "cells": [
        "request_param",
        "billingAuthorityReference",
        "014726"
      ],
      "line": 28
    },
    {
      "cells": [
        "request_param",
        "startPoint",
        "1"
      ],
      "line": 29
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I send the request to NDR List Management API \u0027GET Basic Search\u0027 endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "the status code 200 is returned",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "the following fields and their values are returned successfully",
  "rows": [
    {
      "cells": [
        "FIELD",
        "MATCHER",
        "VALUE"
      ],
      "line": 33
    },
    {
      "cells": [
        "NDRListItems[0].asstRef",
        "equalsNumber",
        "16500965000"
      ],
      "line": 34
    },
    {
      "cells": [
        "NDRListItems[0].uarn",
        "equalsNumber",
        "9942982000"
      ],
      "line": 35
    },
    {
      "cells": [
        "NDRListItems[0].billingAuthorityReference",
        "equals",
        "014726"
      ],
      "line": 36
    },
    {
      "cells": [
        "NDRListItems[0].address",
        "equals",
        "SHOP AT HONEYSUCKLE COTTAGE APPERLEY LANE, RAWDON, LEEDS, LS19 7DX"
      ],
      "line": 37
    },
    {
      "cells": [
        "NDRListItems[0].description",
        "equals",
        "SHOP AND PREMISES"
      ],
      "line": 38
    },
    {
      "cells": [
        "NDRListItems[0].specialCategoryCode",
        "equals",
        "249G"
      ],
      "line": 39
    },
    {
      "cells": [
        "NDRListItems[0].compositeProperty",
        "equals",
        "Y"
      ],
      "line": 40
    },
    {
      "cells": [
        "NDRListItems[0].effectiveFromDate",
        "equals",
        "2018-06-28"
      ],
      "line": 41
    },
    {
      "cells": [
        "NDRListItems[0].listAlterationDate",
        "equals",
        "2018-06-28"
      ],
      "line": 42
    },
    {
      "cells": [
        "NDRListItems[0].rateableValue",
        "equalsNumber",
        "72571"
      ],
      "line": 43
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.addRequestDetails(DataTable)"
});
formatter.result({
  "duration": 1274115,
  "status": "passed"
});
formatter.match({
  "location": "NDRListManagementSteps.getBasicSearch()"
});
formatter.result({
  "duration": 24961117,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 16
    }
  ],
  "location": "CommonSteps.assertStatusCode(int)"
});
formatter.result({
  "duration": 878641,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.assertFields(DataTable)"
});
formatter.result({
  "duration": 102305518,
  "status": "passed"
});
formatter.after({
  "duration": 26060,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 46,
  "name": "Negative testing of NDR List Management Basic Search parameters",
  "description": "",
  "id": "ensure-the-ndr-list-management-api---basic-search-endpoint;negative-testing-of-ndr-list-management-basic-search-parameters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 47,
  "name": "I have the test \u003ctest\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "I have a new request with the following details",
  "rows": [
    {
      "cells": [
        "TYPE",
        "NAME",
        "VALUE"
      ],
      "line": 49
    },
    {
      "cells": [
        "header",
        "Accept",
        "application/vnd.hmrc.1.0+json"
      ],
      "line": 50
    },
    {
      "cells": [
        "path_param",
        "listYear",
        "2017"
      ],
      "line": 51
    },
    {
      "cells": [
        "request_param",
        "billingAuthRef",
        "\u003cbillingAuthRef\u003e"
      ],
      "line": 52
    },
    {
      "cells": [
        "request_param",
        "pageSize",
        "\u003cpageSize\u003e"
      ],
      "line": 53
    },
    {
      "cells": [
        "request_param",
        "postcode",
        "\u003cpostcode\u003e"
      ],
      "line": 54
    },
    {
      "cells": [
        "request_param",
        "reqTotalRowCount",
        "\u003creqTotalRowCount\u003e"
      ],
      "line": 55
    },
    {
      "cells": [
        "request_param",
        "sortDesc",
        "\u003csortDesc\u003e"
      ],
      "line": 56
    },
    {
      "cells": [
        "request_param",
        "sortField",
        "\u003csortField\u003e"
      ],
      "line": 57
    },
    {
      "cells": [
        "request_param",
        "startPoint",
        "\u003cstartPoint\u003e"
      ],
      "line": 58
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I send the request to NDR List Management API \u0027GET Basic Search\u0027 endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "the status code 400 is returned",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "the field with jsonPath \u0027errorMessage\u0027 is equal to \u0027\u003cmsg\u003e\u0027",
  "keyword": "And "
});
formatter.examples({
  "line": 63,
  "name": "",
  "description": "",
  "id": "ensure-the-ndr-list-management-api---basic-search-endpoint;negative-testing-of-ndr-list-management-basic-search-parameters;",
  "rows": [
    {
      "cells": [
        "test",
        "billingAuthRef",
        "pageSize",
        "postcode",
        "reqTotalRowCount",
        "sortDesc",
        "sortField",
        "startPoint",
        "msg"
      ],
      "line": 64,
      "id": "ensure-the-ndr-list-management-api---basic-search-endpoint;negative-testing-of-ndr-list-management-basic-search-parameters;;1"
    },
    {
      "cells": [
        "mandatory startPoint value missing",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "org.mule.api.MessagingException: Invalid value \u0027\u0027 for query parameter startPoint. Integer required (org.mule.module.apikit.exception.InvalidQueryParameterException)."
      ],
      "line": 65,
      "id": "ensure-the-ndr-list-management-api---basic-search-endpoint;negative-testing-of-ndr-list-management-basic-search-parameters;;2"
    },
    {
      "cells": [
        "pageSize \u003d 0",
        "",
        "0",
        "ex1",
        "",
        "",
        "",
        "1",
        "org.mule.api.MessagingException: Invalid value \u00270\u0027 for query parameter pageSize. Value is below the minimum 1 (org.mule.module.apikit.exception.InvalidQueryParameterException)."
      ],
      "line": 66,
      "id": "ensure-the-ndr-list-management-api---basic-search-endpoint;negative-testing-of-ndr-list-management-basic-search-parameters;;3"
    },
    {
      "cells": [
        "pageSize \u003d -1",
        "",
        "-1",
        "ex1",
        "",
        "",
        "",
        "1",
        "org.mule.api.MessagingException: Invalid value \u0027-1\u0027 for query parameter pageSize. Value is below the minimum 1 (org.mule.module.apikit.exception.InvalidQueryParameterException)."
      ],
      "line": 67,
      "id": "ensure-the-ndr-list-management-api---basic-search-endpoint;negative-testing-of-ndr-list-management-basic-search-parameters;;4"
    },
    {
      "cells": [
        "missing mandatory param postcode",
        "",
        "1",
        "",
        "",
        "",
        "",
        "1",
        "VOAException Postcode entry too short:"
      ],
      "line": 68,
      "id": "ensure-the-ndr-list-management-api---basic-search-endpoint;negative-testing-of-ndr-list-management-basic-search-parameters;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 162079,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Negative testing of NDR List Management Basic Search parameters",
  "description": "",
  "id": "ensure-the-ndr-list-management-api---basic-search-endpoint;negative-testing-of-ndr-list-management-basic-search-parameters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 47,
  "name": "I have the test mandatory startPoint value missing",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "I have a new request with the following details",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "rows": [
    {
      "cells": [
        "TYPE",
        "NAME",
        "VALUE"
      ],
      "line": 49
    },
    {
      "cells": [
        "header",
        "Accept",
        "application/vnd.hmrc.1.0+json"
      ],
      "line": 50
    },
    {
      "cells": [
        "path_param",
        "listYear",
        "2017"
      ],
      "line": 51
    },
    {
      "cells": [
        "request_param",
        "billingAuthRef",
        ""
      ],
      "line": 52
    },
    {
      "cells": [
        "request_param",
        "pageSize",
        ""
      ],
      "line": 53
    },
    {
      "cells": [
        "request_param",
        "postcode",
        ""
      ],
      "line": 54
    },
    {
      "cells": [
        "request_param",
        "reqTotalRowCount",
        ""
      ],
      "line": 55
    },
    {
      "cells": [
        "request_param",
        "sortDesc",
        ""
      ],
      "line": 56
    },
    {
      "cells": [
        "request_param",
        "sortField",
        ""
      ],
      "line": 57
    },
    {
      "cells": [
        "request_param",
        "startPoint",
        ""
      ],
      "line": 58
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I send the request to NDR List Management API \u0027GET Basic Search\u0027 endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "the status code 400 is returned",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "the field with jsonPath \u0027errorMessage\u0027 is equal to \u0027org.mule.api.MessagingException: Invalid value \u0027\u0027 for query parameter startPoint. Integer required (org.mule.module.apikit.exception.InvalidQueryParameterException).\u0027",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "mandatory startPoint value missing",
      "offset": 16
    }
  ],
  "location": "CommonSteps.writeTestName(String)"
});
formatter.result({
  "duration": 408553,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.addRequestDetails(DataTable)"
});
formatter.result({
  "duration": 975706,
  "status": "passed"
});
formatter.match({
  "location": "NDRListManagementSteps.getBasicSearch()"
});
formatter.result({
  "duration": 17786174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 16
    }
  ],
  "location": "CommonSteps.assertStatusCode(int)"
});
formatter.result({
  "duration": 418294,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "errorMessage",
      "offset": 25
    },
    {
      "val": "equal to",
      "offset": 42
    },
    {
      "val": "org.mule.api.MessagingException: Invalid value \u0027\u0027 for query parameter startPoint. Integer required (org.mule.module.apikit.exception.InvalidQueryParameterException).",
      "offset": 52
    }
  ],
  "location": "CommonSteps.assertJsonField(String,String,String)"
});
formatter.result({
  "duration": 13253974,
  "status": "passed"
});
formatter.after({
  "duration": 30938,
  "status": "passed"
});
formatter.before({
  "duration": 169830,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "Negative testing of NDR List Management Basic Search parameters",
  "description": "",
  "id": "ensure-the-ndr-list-management-api---basic-search-endpoint;negative-testing-of-ndr-list-management-basic-search-parameters;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 47,
  "name": "I have the test pageSize \u003d 0",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "I have a new request with the following details",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "rows": [
    {
      "cells": [
        "TYPE",
        "NAME",
        "VALUE"
      ],
      "line": 49
    },
    {
      "cells": [
        "header",
        "Accept",
        "application/vnd.hmrc.1.0+json"
      ],
      "line": 50
    },
    {
      "cells": [
        "path_param",
        "listYear",
        "2017"
      ],
      "line": 51
    },
    {
      "cells": [
        "request_param",
        "billingAuthRef",
        ""
      ],
      "line": 52
    },
    {
      "cells": [
        "request_param",
        "pageSize",
        "0"
      ],
      "line": 53
    },
    {
      "cells": [
        "request_param",
        "postcode",
        "ex1"
      ],
      "line": 54
    },
    {
      "cells": [
        "request_param",
        "reqTotalRowCount",
        ""
      ],
      "line": 55
    },
    {
      "cells": [
        "request_param",
        "sortDesc",
        ""
      ],
      "line": 56
    },
    {
      "cells": [
        "request_param",
        "sortField",
        ""
      ],
      "line": 57
    },
    {
      "cells": [
        "request_param",
        "startPoint",
        "1"
      ],
      "line": 58
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I send the request to NDR List Management API \u0027GET Basic Search\u0027 endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "the status code 400 is returned",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "the field with jsonPath \u0027errorMessage\u0027 is equal to \u0027org.mule.api.MessagingException: Invalid value \u00270\u0027 for query parameter pageSize. Value is below the minimum 1 (org.mule.module.apikit.exception.InvalidQueryParameterException).\u0027",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "pageSize \u003d 0",
      "offset": 16
    }
  ],
  "location": "CommonSteps.writeTestName(String)"
});
formatter.result({
  "duration": 71981,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.addRequestDetails(DataTable)"
});
formatter.result({
  "duration": 1061478,
  "status": "passed"
});
formatter.match({
  "location": "NDRListManagementSteps.getBasicSearch()"
});
formatter.result({
  "duration": 19346480,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 16
    }
  ],
  "location": "CommonSteps.assertStatusCode(int)"
});
formatter.result({
  "duration": 1171671,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "errorMessage",
      "offset": 25
    },
    {
      "val": "equal to",
      "offset": 42
    },
    {
      "val": "org.mule.api.MessagingException: Invalid value \u00270\u0027 for query parameter pageSize. Value is below the minimum 1 (org.mule.module.apikit.exception.InvalidQueryParameterException).",
      "offset": 52
    }
  ],
  "location": "CommonSteps.assertJsonField(String,String,String)"
});
formatter.result({
  "duration": 8635262,
  "status": "passed"
});
formatter.after({
  "duration": 21584,
  "status": "passed"
});
formatter.before({
  "duration": 314587,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "Negative testing of NDR List Management Basic Search parameters",
  "description": "",
  "id": "ensure-the-ndr-list-management-api---basic-search-endpoint;negative-testing-of-ndr-list-management-basic-search-parameters;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 47,
  "name": "I have the test pageSize \u003d -1",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "I have a new request with the following details",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "rows": [
    {
      "cells": [
        "TYPE",
        "NAME",
        "VALUE"
      ],
      "line": 49
    },
    {
      "cells": [
        "header",
        "Accept",
        "application/vnd.hmrc.1.0+json"
      ],
      "line": 50
    },
    {
      "cells": [
        "path_param",
        "listYear",
        "2017"
      ],
      "line": 51
    },
    {
      "cells": [
        "request_param",
        "billingAuthRef",
        ""
      ],
      "line": 52
    },
    {
      "cells": [
        "request_param",
        "pageSize",
        "-1"
      ],
      "line": 53
    },
    {
      "cells": [
        "request_param",
        "postcode",
        "ex1"
      ],
      "line": 54
    },
    {
      "cells": [
        "request_param",
        "reqTotalRowCount",
        ""
      ],
      "line": 55
    },
    {
      "cells": [
        "request_param",
        "sortDesc",
        ""
      ],
      "line": 56
    },
    {
      "cells": [
        "request_param",
        "sortField",
        ""
      ],
      "line": 57
    },
    {
      "cells": [
        "request_param",
        "startPoint",
        "1"
      ],
      "line": 58
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I send the request to NDR List Management API \u0027GET Basic Search\u0027 endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "the status code 400 is returned",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "the field with jsonPath \u0027errorMessage\u0027 is equal to \u0027org.mule.api.MessagingException: Invalid value \u0027-1\u0027 for query parameter pageSize. Value is below the minimum 1 (org.mule.module.apikit.exception.InvalidQueryParameterException).\u0027",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "pageSize \u003d -1",
      "offset": 16
    }
  ],
  "location": "CommonSteps.writeTestName(String)"
});
formatter.result({
  "duration": 202209,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.addRequestDetails(DataTable)"
});
formatter.result({
  "duration": 1098034,
  "status": "passed"
});
formatter.match({
  "location": "NDRListManagementSteps.getBasicSearch()"
});
formatter.result({
  "duration": 14861829,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 16
    }
  ],
  "location": "CommonSteps.assertStatusCode(int)"
});
formatter.result({
  "duration": 475364,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "errorMessage",
      "offset": 25
    },
    {
      "val": "equal to",
      "offset": 42
    },
    {
      "val": "org.mule.api.MessagingException: Invalid value \u0027-1\u0027 for query parameter pageSize. Value is below the minimum 1 (org.mule.module.apikit.exception.InvalidQueryParameterException).",
      "offset": 52
    }
  ],
  "location": "CommonSteps.assertJsonField(String,String,String)"
});
formatter.result({
  "duration": 7424028,
  "status": "passed"
});
formatter.after({
  "duration": 46515,
  "status": "passed"
});
formatter.before({
  "duration": 147350,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "Negative testing of NDR List Management Basic Search parameters",
  "description": "",
  "id": "ensure-the-ndr-list-management-api---basic-search-endpoint;negative-testing-of-ndr-list-management-basic-search-parameters;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 47,
  "name": "I have the test missing mandatory param postcode",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "I have a new request with the following details",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "rows": [
    {
      "cells": [
        "TYPE",
        "NAME",
        "VALUE"
      ],
      "line": 49
    },
    {
      "cells": [
        "header",
        "Accept",
        "application/vnd.hmrc.1.0+json"
      ],
      "line": 50
    },
    {
      "cells": [
        "path_param",
        "listYear",
        "2017"
      ],
      "line": 51
    },
    {
      "cells": [
        "request_param",
        "billingAuthRef",
        ""
      ],
      "line": 52
    },
    {
      "cells": [
        "request_param",
        "pageSize",
        "1"
      ],
      "line": 53
    },
    {
      "cells": [
        "request_param",
        "postcode",
        ""
      ],
      "line": 54
    },
    {
      "cells": [
        "request_param",
        "reqTotalRowCount",
        ""
      ],
      "line": 55
    },
    {
      "cells": [
        "request_param",
        "sortDesc",
        ""
      ],
      "line": 56
    },
    {
      "cells": [
        "request_param",
        "sortField",
        ""
      ],
      "line": 57
    },
    {
      "cells": [
        "request_param",
        "startPoint",
        "1"
      ],
      "line": 58
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I send the request to NDR List Management API \u0027GET Basic Search\u0027 endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "the status code 400 is returned",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "the field with jsonPath \u0027errorMessage\u0027 is equal to \u0027VOAException Postcode entry too short:\u0027",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "missing mandatory param postcode",
      "offset": 16
    }
  ],
  "location": "CommonSteps.writeTestName(String)"
});
formatter.result({
  "duration": 542866,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.addRequestDetails(DataTable)"
});
formatter.result({
  "duration": 1005256,
  "status": "passed"
});
formatter.match({
  "location": "NDRListManagementSteps.getBasicSearch()"
});
formatter.result({
  "duration": 21288485,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 16
    }
  ],
  "location": "CommonSteps.assertStatusCode(int)"
});
formatter.result({
  "duration": 596733,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "errorMessage",
      "offset": 25
    },
    {
      "val": "equal to",
      "offset": 42
    },
    {
      "val": "VOAException Postcode entry too short:",
      "offset": 52
    }
  ],
  "location": "CommonSteps.assertJsonField(String,String,String)"
});
formatter.result({
  "duration": 11201595,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nJSON path errorMessage doesn\u0027t match.\nExpected: VOAException Postcode entry too short:\n  Actual: VOAException Postcode entry too short: \n\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:483)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.validate(ResponseSpecificationImpl.groovy:89)\n\tat com.cucumber.steps.BaseStep.assertLatestResponse(BaseStep.java:27)\n\tat com.cucumber.steps.CommonSteps.assertFieldValue(CommonSteps.java:170)\n\tat com.cucumber.steps.CommonSteps.assertJsonField(CommonSteps.java:104)\n\tat ✽.And the field with jsonPath \u0027errorMessage\u0027 is equal to \u0027VOAException Postcode entry too short:\u0027(ndrlistmanagementapiold/BasicSearchTests.feature:61)\n",
  "status": "failed"
});
formatter.after({
  "duration": 66131,
  "status": "passed"
});
});