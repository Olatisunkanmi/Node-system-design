const app = require('./index');

const port = process.env.PORT || 8000;
app.listen(port, () => {
	console.log(`Node is listening on Port ${port}`);
});
