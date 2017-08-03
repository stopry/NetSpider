var http = require('http');


var url = 'http://www.qq.com'

http.get(url,function(res) {
	var result = ''
	res.on('data',function(data){
		console.log(result+=data)
	})
})