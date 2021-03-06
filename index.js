const express = require('express');
const app = express();
const port = 8000;

// use express router
app.use('/', require('./routers'));

// setting up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.listen(port, function(err) {
	if (err) {
		console.log(`Error in runnning the server: ${err}`);
		return;
	}
	console.log(`Server is running in port : ${port}`);
});
