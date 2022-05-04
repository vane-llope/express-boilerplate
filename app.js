const express =require('express')
const app = express()
app.set('view engine','ejs')  

const controller = require('./controllers/controller.js')
app.listen(3000,() => {
  console.log('listening on port 3000')
})

app.use(express.urlencoded({ extended : true}))
app.use(express.static('public'))


app.get('/',controller.show)


app.use( (req,res) => {
    res.status(404).render('404',{title:'not Found'})
})