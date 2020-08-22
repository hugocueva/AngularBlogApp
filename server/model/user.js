const moongoose = require('mongoose'); 
const Schema = moongoose.Schema; 

const userSchema = new Schema({
    username: {type: String, required: true, unique: true}, 
    password: {type: String, required: true}, 
    name: {type: String}
}, {collection: 'user'});

const User = moongoose.model('User', userSchema); 
module.exports = User; 