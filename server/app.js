const express = require('express'); 
const bodyParser = require('body-parser'); 
const cors = require('cors')
const mongoose = require('mongoose'); 
const User = require('./model/user'); 
const Post = require('./model/post'); 

const app = express();
app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false})); 


const url = 'mongodb://localhost/blogdb'; 
mongoose.connect(url, {useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected '); 
    // we're connected!
});


app.post('/api/post/getAllPost', (req, res) => {    
    Post.find({},(err, doc) => {
        if(err) throw err;
        console.log('Returned data', doc); 
        return res.status(200).json({
            status: 'success',
            data: doc
        })
    });
}); 

app.post('/api/user/login', (req,res) => {
    User.find({ 
        username: req.body.username, password: req.body.password
    }, function(err, user){
        if(err) throw err; 
        if(user.length === 1){
            return res.status(200).json({
                status: 'success', data: user
            }); 
        }else{
            return res.status(200).json({
                status: 'fail', message: 'Login Failed'
            });
        }
    });     
}); 

app.listen(3000, () => console.log('blog server running on port 3000!')); 