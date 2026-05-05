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

