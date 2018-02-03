'use strict';

// const mongoose = require('mongoose');
// const uri = 'mongodb://localhost/todo';
// const useMongoClient = true;
// mongoose.Promise = global.Promise;
// mongoose.connect(uri, {useMongoClient}, (err)=> {
// 	if (err) 
// 		console.log('Database not connected');

//      else
// 		console.log('Database  connected')
  
// })


// module.exports = mongoose

'use strict';
const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/test';


mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
	console.log('Mongoose default connection open to ' + dbURI);
})

mongoose.connection.on('error', (err) => {
	console.log('Mongoose default error ' + err);
})

mongoose.connection.on('disconnected', (err) => {
	console.log('Mongoose default disconnected ');
})

process.on('SIGINT', () => {
	mongoose.onnection.close(() => {
	console.log('Mongoose default connected ')
      process.exit(0);
	})
})



module.exports = mongoose