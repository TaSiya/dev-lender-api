const Services = require('./services/service');
const Routes= require('./api/application');

module.exports = (app, pool) =>{
    const service = Services(pool);
    const route = Routes(service);

    app.get('/api/user', route.allUsers);
}
