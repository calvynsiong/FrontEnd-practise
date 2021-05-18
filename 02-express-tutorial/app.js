const express = require('express');
const people = require("./routes/people") 
const auth = require("./routes/auth") 
const app = express();

app.use(express.static('./methods-public'));
// ! Allows for data to be parsed and then stored in req.body
app.use(express.urlencoded({ extended: false }));
// ! Allows for json to be parsed
app.use(express.json());
// ! Setting up router with people/login
app.use("/api/people", people);
app.use("/login", auth);



app.listen(5000, () => {
	console.log(`Server started on 5000`);
});
