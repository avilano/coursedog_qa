Feature: Test Search with Input

    Scenario: As a user, I want to check the events of a given input search
        Given That current date is "2021/11/20"
        When I browse "Tokyo" on the search input box
        Then I can see "1" event matching the searched term "Tokyo"