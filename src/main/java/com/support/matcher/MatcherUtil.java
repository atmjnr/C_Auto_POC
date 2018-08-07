package com.support.matcher;


import com.enums.MatcherEnum;
import io.restassured.builder.ResponseSpecBuilder;
import org.hamcrest.Matcher;
import org.hamcrest.Matchers;
import org.springframework.stereotype.Component;
import static org.hamcrest.Matchers.*;


@Component
public class MatcherUtil {

    public <T> Matcher<?> getMatcher(MatcherEnum matcherEnum, T value) {
        Matcher<?> matcher = null;
        switch (matcherEnum) {
            case equals:
                matcher = equalTo(value);
                break;
            case notEqualTo:
                matcher = not(equalTo(value));
                break;
            case present:
                matcher = notNullValue();
                break;
            case notPresent:
                matcher = Matchers.nullValue();
                break;
            case containsString:
                matcher = containsString((String) value);
                break;
            case equalsBoolean:
                boolean val = true;
                if (value.toString().equalsIgnoreCase("false")) {
                    val = false;
                }
                matcher = equalTo(val);
                break;
            case equalsNumber:
                try {
                    // try as an Integer
                    matcher = equalTo(Integer.parseInt(value.toString()));
                } catch (NumberFormatException nfe) {
                    // try as a Long
                    matcher = equalTo(Long.parseLong(value.toString()));
                }
                break;
            case greaterThan:
                try {
                    // try as an Integer
                    matcher = greaterThan(Integer.parseInt(value.toString()));
                } catch (NumberFormatException nfe) {
                    // try as a Long
                    matcher = greaterThan(Long.parseLong(value.toString()));
                }
                break;
            case lessThan:
                try {
                    // try as an Integer
                    matcher = lessThan(Integer.parseInt(value.toString()));
                } catch (NumberFormatException nfe) {
                    // try as a Long
                    matcher = lessThan(Long.parseLong(value.toString()));
                }
                break;
            case greaterThanOrEqualTo:
                try {
                    // try as an Integer
                    matcher = greaterThanOrEqualTo(Integer.parseInt(value.toString()));
                } catch (NumberFormatException nfe) {
                    // try as a Long
                    matcher = greaterThanOrEqualTo(Long.parseLong(value.toString()));
                }
                break;
            case lessThanOrEqualTo:
                try {
                    // try as an Integer
                    matcher = lessThanOrEqualTo(Integer.parseInt(value.toString()));
                } catch (NumberFormatException nfe) {
                    // try as a Long
                    matcher = lessThanOrEqualTo(Long.parseLong(value.toString()));
                }
                break;
            case emptyString:
                matcher = is(isEmptyString());
        }
        return matcher;
    }

    public <T> ResponseSpecBuilder getResponseSpecBuilder(MatcherEnum matcherEnum, String path, T value) {
        ResponseSpecBuilder expSpec = new ResponseSpecBuilder();
        return expSpec.expectBody(path, getMatcher(matcherEnum, value));
    }
    public <T> ResponseSpecBuilder getResponseSpecBuilder(ResponseSpecBuilder responseSpecBuilder, MatcherEnum matcherEnum, String path, T value) {
        return responseSpecBuilder.expectBody(path, getMatcher(matcherEnum, value));
    }
}
