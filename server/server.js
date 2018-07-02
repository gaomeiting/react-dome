const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookParser = require('cookie-parser')
const userRoute = require('./user')
const server = require('http').Server(app)
const model = require('./model')
const Chat = model.getModel('chat')
const io = require('socket.io')(server)

app.use(bodyParser.json())
app.use(cookParser())
app.use('/user', userRoute)

io.on('connection', function(socket) {
	//console.log('user login')
	socket.on('sendMsg', function(data) {
		//onsole.log(data)
		const {
			from,
			to,
			msg
		} = data
		const chatid = [from, to].sort().join('_')
		Chat.create({
			chatid,
			from,
			to,
			content: msg
		}, function(err, doc) {
			console.log(Object.assign({}, doc._doc), "io")
			io.emit('recMsg', Object.assign({}, doc._doc))
		})
		/*console.log(data)*/
		//io.emit('recMsg', data)
	})
})
server.listen(9093, function() {
	console.log('Node app start at port 9093')
})