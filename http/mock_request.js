var http = require('http')
var querystring = require('querystring')


var postData = querystring.stringify({

})

var options = {
	'hostname' : '',
	'port' : '',
	'path' : '',
	'method' : ''

}

var req = http.request(req, function(res){
	console.log('Status: ' res.statusCode)
	console.log('headers: ' JSON.stringify(req.headers))

	res.on('data', function(chunk){
		console.log(Buffer.isBuffer(chunk))
		console.log(typeof chunk)

	})

})

req.on('end', function(){
	console.log('end')

})

req.on('error', function(e){
	console.log('error: ' e.message)
})

req.write(postData)

req.end()

