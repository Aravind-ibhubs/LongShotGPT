# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Documentation of project

## Long shot AI

- I have element of activeQuery where default value is null.
- When user click on previous chat, then activeQuery is set to title value.
- When User click in new chat button , it automatically make activeQuery as null, title box will be displayed.
- When submit button is click,
     - Firstly, it gets the data from API.
     - Based on response, the response value is change.
     - on sucess response, the response data is set as a value.
     - on error response, the error message is set as a value.
     - After get the response, it check the active query.
     - if it is null, it is a new query. then it is push new data to dictionary.
     - if it is not null, it is a old query, then it push data to query-pair.