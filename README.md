# TodoList
an app for practice backend using node/express.js, middlewares, ejs, css.
First project TodoList
1.	First ill start creating a folder named: TodoListApp
2.	Create the app.js
3.	Inside the folder of the project make a npm I express ejs body-parser
4.	Edit the .json to have the import available (Ecma Script Module)
5.	Now inside the app.js I’ll make a common template of node 😊
6.	To be sure that everything is working fine, I’ll make a nodemon app.js to run my app, and be sure that is running correctly on my localhost:3000 !
7.	Everything is working fine, so now, I’ll create my folder of views to have my files of embedded java script here (EJS) and a file named index.ejs. 
8.	Since the header and footer can be something that can be used again and again to don’t repeat code ill make a folder named partials with a header.ejs and a footer.ejs:
9.	Now on my index.ejs (the home page) im going to add the next code to don’t repeat everytime code if I make another pages inside the webapp:
10.	Now for the css, I’ll create a public\ styles main.css to then use this function inside my app.js to serve static files, such as HTML, CSS, JavaScript, images, and other assets, to clients (web browsers) directly from a specified directory. And add the function inside my app.js 
app.use(express.static("public"));
11.	Now on my app.js I’ll render this file to see if I can get into my homepage 😎, using http request handlers 
