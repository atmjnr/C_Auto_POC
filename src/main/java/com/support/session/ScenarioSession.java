package com.support.session;


import io.restassured.response.Response;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Component
public class ScenarioSession {

    private Map<String, Object> sessionData = new HashMap<String, Object>();
    private Map<String, List> list = new HashMap<>();

    public void putData(String key, Object value) {
        sessionData.put(key, value);
    }

    public Object getData(String key) {
        return sessionData.get(key);
    }

    public Response getLatestResponse(){
        return (Response)getData(SessionKey.LATEST_RESPONSE);
    }

    //This has been added as using object is giving an unchecked exception when using lists.
    //So use this to store a List. e.g getList().put() and getList().get()
    public Map<String, List> getList() {
        return list;
    }
    public void cleanScenarioSession() {
        sessionData.clear();
    }
}
