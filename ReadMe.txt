HOW TO START NODE JS

1.npm init    //to install package.json
2.npm install --package-lock-only   //to install package-lock.json
3.npm install express
4.npm install ejs

5.make a file and name it app.js which contains these  lines at the top:
const express =require('express')
const app = express()
app.set('view engine','ejs')  //which atumaticly looks at views folder

const controller = require('./controllers/controller.js')
app.listen(3000,() => {
  console.log('listening on port 3000')
})

app.use(express.urlencoded({ extended : true}))
app.use(express.static('public'))

6.make a folder and call it views which contains html files

7.make a folder name it controllers
inside controllers file make file and name it controller.js
and inside the file :
  var mysql = require('mysql');
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "zahra5596864625",
    database: "mydb"
  });
  
  con.connect((err) => {
    if (err) throw err;
    else 
    console.log("Connected!");
  });

8.npm install mysql

9.remember to match your database and password in controller.js file