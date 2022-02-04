var http = require('http');
 var express = require('express');
 var bodyParser = require('body-parser');
 var cors = require('cors');
 var appRoute = require('./Routes/appRoutes');


 app = express();
 app.use(cors());
 app.use(bodyParser.urlencoded({
     extended: true
 }));
 app.use(bodyParser.json());
 app.use('/api', appRoute);



 http.createServer(app).listen(process.env.PORT||3000);
 console.log("server started");