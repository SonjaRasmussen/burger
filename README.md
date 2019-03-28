# EAT DA BURGER

### About
Eat-Da-Burger! lets users input the names of burgers they'd like to eat. User submits a burger's name the app will display the burger on the left side of the page -- waiting to be eaten. If you don't like it, you can move it back and eat another one! 

### Live Version

[App deployed on Heroku](https://pure-plateau-26782.herokuapp.com/)

### Functionality

This app uses Node, Express, Handlebars, and ORM. Node and MySQL are used to query and route data flow in the app.

#### CRUD Operations:

- READ all entries from the MySQL database and display them using handlebars
- UPDATE a selected burger by clicking "LET'S EAT THIS!", hits an /burger/updateOne/:id route 
- CREATE a new burger using the "Add a Burger" form, which hits a /burger/createOne route in Express to insert a new burger into the MySQL database and re-routes the webpage back to the index

### Installation

To run the application locally, first clone this repository.

Next, install the application dependencies.

`npm install`

Finally, run the node server locally.

`node server.js`

Then, open the local application on [port 8080 at the URL:](http://localhost:8080/?)
