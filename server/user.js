const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
const Chat = model.getModel('chat')
const utils = require('utility')
Router.get('/getmsglist', function(req, res) {

	const user = req.cookies.userId
	/*Chat.remove({}, (err, doc) => {
		console.log(doc)
	})*/
	User.find({}, function(e, userdoc) {
		let users = {}
		userdoc.forEach(v => {
			users[v._id] = {
				name: v.name,
				avatar: v.avatar.icon
			}
		})
		Chat.find({
			'$or': [{
				from: user
			}, {
				to: user
			}]
		}, function(err, doc) {
			if (!err) {
				return res.json({
					code: 0,
					msgs: doc,
					users: users
				})
			}
		})

	})
	// {'$or':[{from:user,to:user}]}

})
Router.post('/readmsg', function(req, res) {
	const userid = req.cookies.userId
	const {
		from
	} = req.body
	Chat.update({
			from,
			to: userid
		}, {
			'$set': {
				read: true
			}
		}, {
			'multi': true
		},
		function(err, doc) {
			console.log(doc)
			if (!err) {
				return res.json({
					code: 0,
					num: doc.nModified
				})
			}
			return res.json({
				code: 1,
				msg: '修改失败'
			})
		})
})
Router.get('/list', function(req, res) {
	const {
		type
	} = req.query
	User.find({
		type
	}, function(err, doc) {
		return res.json({
			code: 0,
			data: doc
		})
	})
})
Router.get('/info', function(req, res) {
	const {
		userId
	} = req.cookies
	if (!userId) {
		return res.json({
			code: 1
		})
	}
	User.findOne({
		_id: userId
	}, function(err, doc) {
		if (!err) {
			return res.json({
				code: 0,
				user: doc
			})
		}
	})
})
Router.post('/register', function(req, res) {
	const {
		name,
		pwd,
		type
	} = req.body;
	User.findOne({
		name
	}, (err, doc) => {
		if (!err && doc) {
			return res.json({
				code: 1,
				msg: '用户名已存在,换个名字试试'
			})
		}
		if (!doc) {
			new User({
				name,
				pwd: Md5Pwd(pwd),
				type
			}).save((err, doc) => {
				if (!err) {
					res.cookie('userId', doc._id)
					return res.json({
						code: 0,
						user: doc
					})

				}
			})

		}

	})
})
Router.post('/updata', function(req, res) {
	const {
		_id,
		company,
		job,
		salary,
		desc,
		avatar
	} = req.body;
	User.findByIdAndUpdate(_id, {
		company,
		job,
		salary,
		desc,
		avatar
	}, (err, doc) => {
		if (!err && doc) {
			//更新数据
			return res.json({
				code: 0,
				user: doc
			})
		}
		if (!doc) {
			return res.json({
				code: 1,
				msg: '用户不存在'
			})
		}

	})
})
Router.post('/login', function(req, res) {
	const {
		name,
		pwd
	} = req.body;
	User.findOne({
		name,
		pwd: Md5Pwd(pwd)
	}, {
		pwd: 0
	}, (err, doc) => {
		if (!err && !doc) {
			return res.json({
				code: 1,
				msg: '用户名或密码错误'
			})
		}
		if (doc) {

			res.cookie('userId', doc._id)
			return res.json({
				code: 0,
				user: doc
			})

		}

	})
})

function Md5Pwd(pwd) {
	const salt = 'imooc_is_good_3957x8yza6!@#IUHJh'
	let newPwd = pwd + salt;
	return utils.md5(utils.md5(newPwd))
}
module.exports = Router;