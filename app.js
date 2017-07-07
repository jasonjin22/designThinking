var express = require('express')
var fs = require('fs')
var path = require('path')

var port = process.env.PORT ||5000

var app = express()
app.set('views','./views')
app.set('view engine','jade')
app.use(express.static(path.join(__dirname,'bower_components')))

app.listen(port)
console.log('umunc starts at port'+port)

app.get('/hw/1',function(req,res){
	res.render('./index')
})
app.get('/hw/01',function(req,res){
	res.render('./hw/1')
})
app.get('/hw/2/norm',function(req,res){
	res.sendfile('./norm/groupNorm.jpg')
})
app.get('/hw/2/mindmap',function(req,res){
	res.sendfile('./norm/mindmap.jpg')
})
app.get('/hw/3/assumptionarea',function(req,res){
	res.sendfile('./norm/area.jpg')
})
app.get('/hw/3/plan',function(req,res){
	res.sendfile('./norm/plan.pdf')
})

app.get('/hw/3/scriptdeep',function(req,res){
	res.sendfile('./norm/dt3.3.jpeg')
})
app.get('/hw/3/scriptwide',function(req,res){
	res.sendfile('./norm/scriptwide.png')
})
app.get('/hw/3/presentation1',function(req,res){
	res.sendfile('./norm/presentation1.pdf')
})
app.get('/hw/3/midPresentation',function(req,res){
	res.sendfile('./norm/midPresentation.pdf')
})
app.get('/hw/4',function(req,res){
	res.render('./hw/4')
})
app.get('/hw/4/requirementInsight',function(req,res){
	res.sendfile('./norm/requirement&insight.pdf')
})
app.get('/hw/4/userPersona',function(req,res){
	res.sendfile('./norm/userPersona.png')
})