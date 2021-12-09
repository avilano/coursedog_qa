Feature: Test Event

    Scenario: As a user, I want to check the events of a given date
        Given That current date is "2021/11/20"
        When I click on "Today’s Events" navlink
        Then I can see "1" event happening

    Scenario: As a user, I want to check the events of a given date
        Given That current date is "2021/9/2"
        When I click on "Today’s Events" navlink
        Then I can see there are no events happening

    Scenario: As a user, I want to check the events of a given date
        Given That current date is "2021/9/2"
        When I click on "Featured Events" navlink
        Then I can see "3" event happening