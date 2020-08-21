const express = require('express'); 
const bodyParser = require('body-parser'); 

const app = express(); 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false})); 

app.get('/api/user/login', (req,res) => {
    res.send('Hello world!'); 
}); 

app.listen(3000, () => console.log('blog server running on port 3000!')); 