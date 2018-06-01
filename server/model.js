const mongoose = require('mongoose')
const db = mongoose.connection
const DB_URL = 'mongodb://127.0.0.1:27017/react'

mongoose.connect(DB_URL)
db.on('connected', function() {
	console.log('mongo connected ok!')
})
const models = {
	user: {
		'name': { 'type': String, 'require': true},
		'pwd': { 'type': String, 'require': true},
		'type': { 'type': Number, 'require': true},
		'avatar': { 'type': String },
		'desc': { 'type': String },
		'title': { 'type': String },
		'company': { 'type': String },
		'money': { 'type': Number }
	},
	chart: {}
}
for(let m in models) {
	mongoose.model(m,new mongoose.Schema(models[m]))
}
module.exports = {
	getModel: function(name) {
		return mongoose.model(name)
	} 
}
/*
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
User.find({}, (err, doc) => {
		if(!err) console.log(doc)
	})

//删除一项
User.remove({name: '李四'}, (err, doc) => {
		console.log(doc)
	})*/
