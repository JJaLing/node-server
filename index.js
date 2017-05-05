var express = require('express')
var app = express()
var port = process.env.PORT||3000
app.use(express.static(__dirname+'/static'))
app.use(function (req, res){
    res.sendfile('./static/index.html')
})

app.listen(port, function(){
    console.log('node server')
})