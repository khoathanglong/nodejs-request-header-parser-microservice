# request-header-parser-microservice

User Story: I can get the IP address, language and operating system for my browser.

	const express=require('express');

	const app=express();

	const ip=require('ip');// npm install ip //use ip module to  get ip adress easily

	app.get('/',(req,res)=>{

	res.setHeader("Content-Type","application/json")
	
	const IPaddress=ip.address();// get IP address
	
	const language=req.acceptsLanguages();//get user language
	
	const header=req.headers['user-agent']// req.headers return an object with 'user-agent' property displaying browser window information 
	
	let index1=header.indexOf('(')+1;
	
	let index2=header.indexOf(')');
	
	let osInfo=header.slice(index1,index2)// extract OS information 
	
	let returnObject={ipaddress:IPaddress,language:language[0],software:osInfo}
	
	res.json(returnObject)

	})

	app.listen(1337);//localhost
