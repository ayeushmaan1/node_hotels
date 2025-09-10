// console.log('server is runningclear')
const express=require ('express')
const db=require('./db');
const app = express();

const PORT=process.env.PORT||3000;
require('dotenv').config();
  

const bodyParser = require('body-parser');
app.use(bodyParser.json());


// const MenuItem=require ('./models/MenuItem')
 
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.get('/', function(req, res) {
  res.send('Hello World?how can i help u')
})
app.get('/about', function(req, res) {
  res.send ('This is the about page')
})

app.get('/contact', function(req, res) {
  res.send ('This endpoint contact')
});

const personRoutes=require('./routes/personRoutes');
const menuItemRoutes=require('./routes/menuItemRoutes');
app.use('/person',personRoutes);


app.use('/menu',menuItemRoutes);

app.listen(PORT,()=>{
  console.log('server is running on port 3000')
});