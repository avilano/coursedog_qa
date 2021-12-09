Feature: Test Event Details

    Scenario: As a user, I want to check the event details are visible
        Given That current date is "2021/9/2"
        When I navigate to the "QA Task Submission" event
        Then I can see all the "QA Task Submission" event details