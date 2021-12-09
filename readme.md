# Recruitment Task - QA Engineer @ Coursedog

Hey there, this is my automation project for CourseDog's QA Engineer position, hope you like it!

The project is using the cypress.io framework for automation with the cucumber plugin.
It also uses Github Actions to run the automation after each push to master.

## Installation

Clone repo and install node dependencies:

```bash
npm install
```

## Usage

To start running the e2e automation you do the following:

```bash
# runs the automation in headless mode
npm run cypress:run

# you can specify the browser to use [chrome|mozilla|edge]
npm run cypress:run:chrome

# opens the Cypress Test Runner
npm run cypress:open
```

## Folder Structure

Most of the code is self-documented and self explanatory, the codebase was kept simple and conscience given the small scope of the project and the requirements.

```
.
├── cypress                 # cypress root folder
│   ├── fixtures            # main folder for the spec files (not used)
│   └── integrations        # main folder for the feature files (cucumber)
│       ├── common          # tests shared steps
│       └── tests           # main tests definitions folder
│   ├── plugins             # used for the cucumber plugin
│   ├── screenshots         # test run screenshots storage
│   ├── support             # cypress commands folder
│   └── videos              # test run video storage
└── ...
```

## Test Plan

The following are the test cases that this automation is currently covering:

- User can search for event given specific date
- User can search and filter by {org} specific events
- User can unfilter search
- User can search for event using a specific query/term
- User can check 'Today's Events' given a specific date
- User can check 'Featured Events' given a specific date
- User can see Event's details
- User can see and use (very important) Footer links

## Test Report

During manual and automation testing a couple of bugs were found:

### BUG-01 - 'Test Name' string appears on filter by org dropdown

| Details: |        |
| -------- | :----: |
| type     |  bug   |
| severity |  low   |
| urgency  | medium |

#### Behavior:

Using Google Chrome 96.0.4664.55(x86_64) on MacOs BigSur 16.11

When trying to filter by organization using the dropdown menu, you can see 'Test Name' as an option.

#### Steps to Reproduce:

1. navigate to the webpage
2. click on the filter by organization dropdown
3. scroll down on the list

![alt text](https://github.com/avilano/coursedog_qa/blob/master/test_report/bug01-screenshot.png?raw=true)

### BUG-02 - 4 events found instead of 3 when filtering by "Model UN" organization

| Details: |        |
| -------- | :----: |
| type     |  bug   |
| severity | medium |
| urgency  | medium |

#### Behavior:

Using Google Chrome 96.0.4664.55(x86_64) on MacOs BigSur 16.11

When filtering by organization using "Model UN", you can see 4 events in the filtered results
instead of the 3 events expected for this test case.

#### Steps to Reproduce:
Video: https://watch.screencastify.com/v/FMzJbsy8CBZx2COGffqz

1. navigate to the webpage
2. click on the filter by organization dropdown
3. scroll down on the list and select "Model UN"
4. scroll and verify the number of event cards found by the filter

![alt text](https://github.com/avilano/coursedog_qa/blob/master/test_report/bug02-screenshot.png?raw=true)

### BUG-03 - remove filter button not working as expected

| Details: |        |
| -------- | :----: |
| type     |  bug   |
| severity |  high  |
| urgency  | medium |

#### Behavior:

Using Google Chrome 96.0.4664.55(x86_64) on MacOs BigSur 16.11

When filtering events by any field, when you remove the filters, the event results
gets popullated with the entire list of event instead of the original list.

#### Steps to Reproduce:
Video: https://watch.screencastify.com/v/YVf89fywuMW5wL5Q8KLJ

1. navigate to the webpage
2. click on the filter by organization dropdown
3. scroll down on the list and select "Model UN"
4. scroll and verify the number of event cards found by the filter
5. click on the remove filters button
6. scroll and verify the number of event cards shown, it is now larger than it originally was

![alt text](https://github.com/avilano/coursedog_qa/blob/master/test_report/bug03-screenshot.png?raw=true)

## License

[MIT](https://choosealicense.com/licenses/mit/)
