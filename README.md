# CRUD-API-with-Nodejs-Express-MongoDB
Step-by-step guide to build a simple CRUD API:

Create a new folder named nodejs-api

open terminal and run the command 'npm init -y' to generate a simple package.json

run 'npm install express body-parser mongoose --save' to install the required dependencies

set up the web server by creating a new file named server.js in the nodejs-api folder

Imported the dependencies which we installed earlier i.e Express and Body Parser

Add body-parser middlewares using express’s app.use() method

Defined a simple GET route that returns a message that the server is running in the server.js file.

Now, run 'node server.js' on the terminal
go to http://localhost:3000 and you should see a message "Server is running".

Import mongoose to server.js to enable connection between our our application and MongoDB
...
