const http = require('http')
const app = require('./app');

const server = http.createServer(app);

const serviceName = 'SERVER';
const port = 3000;
app.listen(port, () => {
    console.log(`${serviceName} is running on port: ${port}`);
});
