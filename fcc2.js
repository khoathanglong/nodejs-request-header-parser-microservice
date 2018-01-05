const express=require('express');
const app=express();
const os =require('os');
const dns=require('dns');
const ip=require('ip');// npm install ip //use ip module to  get ip adress easily
app.get('/',(req,res)=>{
	res.setHeader("Content-Type","application/json")
	const IPaddress=ip.address();
	const language=req.acceptsLanguages();
	const header=req.headers['user-agent']
	let index1=header.indexOf('(')+1;
	let index2=header.indexOf(')');
	let osInfo=header.slice(index1,index2)
	let returnObject={ipaddress:IPaddress,language:language[0],software:osInfo}
	res.json(returnObject)


})
app.listen(1337);