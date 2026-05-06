The first step is to create the folder we want to work in
Then, using the VSCode terminal, `npm init -y` // Creates a package.json file
Then, `git init`
Create gitignore file
Copy premade gitignore template into the gitignore file
https://github.com/github/gitignore/blob/main/Node.gitignore
`git add .gitignore`
`git commit -m "Created gitignore file"`
`git add package.json`
`git commit -m "Added package.json file"`
Create new file index.js
In terminal, `node index.js`
`npm install -D nodemon` // Installs a devdependency nodemon which runs in the background, tracks the files searching for changes, will rerun as soon as you save the document
npm uses package.json
package-lock.json determines what the local machine is doing

- In package.json:
  "scripts": {
    "dev": "nodemon index.js",
    "start": "node index.js"
`npm run dev`
`^C` stops the dependency from running
`npm install express`

- In index.js: 
const express = require("express") // Grabbing the instructions for creating the express application
const app = express() // Actually running the express application
const port = 3000 // Tell the device where to load the data on the server
app.get('/', (req, res) => {
    res.send('Hello World'), changed to, res.send({"Welcome": "Hello World"})
})
app.listen(port, () => {
    console.log(`Simple API listening on port ${port}`);
})
`npm run dev`

- In index.js
app.get('/', (req, res) => {
    res.send({"Welcome": "Hello World"})
})

app.get('/query', (req, res) => {
    res.send(req.query)
}) // localhost:3000/name?name=Arshaan&role=TechTrainee

app.get('/param/:id', (req, res) => {
    res.send(req.params)
}) // localhost:3000/query?id=10

app.listen(port, () => {
    console.log(`Simple API listening on port ${port}`);
})


Create a new file called fruits.json and copy the information from API
Create a new folder called models
Inside new foldder, create a new file Fruit.js

Create a new folder called controllers
Inside new folder, create a new file called fruits.js
Write out your index 

Create a new folder called routes
Inside new folder, create a file called fruits.js
Define your functions

