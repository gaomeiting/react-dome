const express = require('express')
const mongoose = require('mongoose')
const db = mongoose.connection
const app = express()
const DB_URL = 'mongodb://127.0.0.1:27017/react'

mongoose.connect(DB_URL)
db.on('connected', function() {
	console.log('mongo connected ok!')
})
//建表
let userSchema = new mongoose.Schema({name: String, age: String})
const User = mongoose.model('User', userSchema);
//创建数据
User.create({
	name: '小周',
	age: '10'
}, (err, doc) => {
	if(!err) console.log(doc)
})
User.update({name: '李四'}, {'$set': {age: "112"}}, (err, doc) => {
		if(!err) {
			console.log(doc)
		}
	})
//删除一项
/*User.remove({age: 18}, (err, doc) => {
		console.log(doc)
	})*/
app.get('/', function(req, res) {
	res.send('<h1>hello word!!</h1>')
})
app.get('/data',function(req, res) {
	User.find({}, (err, doc) => {
		if(!err) res.json(doc)
	})
	
	
})
app.listen(9093)
