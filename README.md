# Burrito Builder UI

Our company is building a prototype ticketing system for a local burrito shop. It's not perfect, but it will get us toward an MVP that we can show to all the top burrito VCs in town.

## Setup

* Clone down this repo and change into the cloned down directory
* Setup your own GitHub repo so you can push changes to your own profile
* Run `npm install` to install dependencies
* Run `npm start` to start your development server

Be sure to setup the backend repo for Burrito Builder to be able to retrieve and save burrito orders.

## Iterations

### Iteration 1

Right now the `App` component is connected to the store. While sometimes it can be good to have `App` know about everything, in this case the developer team said that it's not necessary.

Remove Redux from the `App` component and move that functionality to the `Orders` component. Make `App` into a functional component, and bring in the burrito orders directly into the `Orders` component instead.

### Iteration 2

Add functionality to allow submission of the form when there is at least one ingredient added to the order. If there are no ingredients in the order, you should not be able to submit the order.

Also, right now we're seeing a warning in the console about unique keys... Get rid of that warning.

### Iteration 3

Currently, the form seems operational, but it's not actually sending information to the backend API. Complete the `OrderForm` component functionality so that when an order is submitted, it is sent to the backend, and if the response back from the server is successful, then the order is displayed on the page.

The new orders should be added to the Redux store following a successful POST request. On refresh, the new order should persist on the page. (You shouldn't _need_ to refresh the page to see the new order, though.)

### Iteration 4

Write tests for the `OrderForm` and `App` components. Also complete tests for the actions and reducers.

### Iteration 5

Add delete functionality for an order (the server-side endpoint exists already) so that when the order is ready it can be removed from the ticketing system.

## Extensions

* Right now, an order can contain duplicates of ingredients. Bring some logic into the form so that an order can contain only two of the same ingredient.
* Add a total cost for the order. Add prices to each ingredient and total each order based on the ingredient cost. Display this for each order. The backend should be able to handle any extra data beyond `name` and `ingredients`.
* Style the form - it's hideous, and the team is sad about it.
* Style the container so that orders are nice and tidy, especially when ingredient amounts vary between orders.


---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
