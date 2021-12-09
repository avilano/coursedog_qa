Feature: Test Filter Search by Organization

# This is an interesting one becase there are 2 bugs catched by this test
# There are actually 4 events matching the organization not 3
# Clearing the filter search does not work as expected

    Scenario: As a user, I want to check the search results can be filtered by organization
        Given That current date is "2021/11/20"
        When I select the "Model UN" "organization" from the "Filter by organization" dropdown
        Then I can see "3" events matching the "Model UN" filter
        Then I can clear the filter
        Then I no longer see filtered results from "Model UN"