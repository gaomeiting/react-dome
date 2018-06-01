const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')

Router.get('/info', function(req, res) {
	res.json({code: 1})
})
Router.post('/register', function(req, res) {
	const { name, pwd, type } = req.body;
	User.findOne({name}, (err, doc) => {
		if(!err && doc) {
			res.json({code: 1, msg: '用户名已存在,换个名字试试'})
		}
		if(!doc) {
			User.create({
				name,
				pwd,
				type
			},(err, doc) => {
				if(!err) res.json({ code: 0, user: {name: doc.name, type: doc.type} })
			})
			
		}

	})
})
module.exports = Router;
