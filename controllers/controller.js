
  const { append } = require('express/lib/response');
var mysql = require('mysql');
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
  });
  
  con.connect((err) => {
    if (err) throw err;
    else 
    console.log("Connected!");
  });

const show = (req,res) => {
    const blogs=[{title:'item1',snippets:'hi this is item1'},
    {title:'item2',snippets:'hi this is item2'},
    {title:'item3',snippets:'hi this is item3'},
    {title:'item4',snippets:'hi this is item4'}]
    var text = "this is the main page"
    res.render('index',{title : 'Home' , text,blogs})
}

module.exports ={
   show
}