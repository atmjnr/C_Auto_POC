
# modernised-api-tests


# Running tests

### Running tests via Cucumber plugin in IntelliJ:

First setup Cucumber plugin and default values

1. In your IntelliJ Plugin preferences, ensure you have Cucumber Java installed.
2. Set the default Cucumber settings. Open the Edit Configurations dialog box
under the IntelliJ menu Run > Edit Configurations.
3. Under the "defaults" left hand menu, select "Cucumber Java"
4. Enter the following details:   

* Main class = cucumber.api.cli.Main
* Glue = com.cucumber.steps
* VM Options = -Dspring.profiles.active=local
* Use classpath of module = modernised-api-tests

To run tests:  

1. Navigate to the feature file/scenario you wish to run.
2. Right click and select "Run: Scenario....scenario name...

### Running tests via the command line:

First, in  a terminal navigate to the project directory.

To run all tests via the command line enter the following command:

`mvn clean verify -Dspring.profiles.active=local`




    