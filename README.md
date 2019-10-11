This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

"start": "react-scripts start"

## Typescript and Redux Framework

This is an example app to show how to build a scalabe singele page progressive web app with typescript, redux and react

react is as loosly coupled as possible to the concept, and could be easily repaced by native WebComponents

https://developer.mozilla.org/de/docs/Web/Web_Components

## preparation: 

cd m3-redux-statemanagement
npm install


## Iteration 1

First look at the Index.tsx and App.tsx files. A lot of things have changed because we want to manage our states with redux.
Take your time to understand the adaptations. You can also have a look at our framework we build for this lab. 
You don't need to comprehend every detail of this framework. For this Lab we want to focus on the main functions of redux.
After you got a overview of the code, change all variable and object names from asset to product. This change doesn't only make sense
because we want to build a shopping card. It will force you to look more precise to the code before starting to extending it.
After you done add two new columns. One for the amount of Products and another for the total price of the product.

## Iteration 2

For the next iteration we want to add a new component. This component should sum up the amount and total price of all our products.
Add in our components folder the new component and name it SimpleSum. Hint: Don't create a new action. For this iteration it is enough
to extend the existing actions.

