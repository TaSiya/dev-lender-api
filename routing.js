const Services = require('./services/service');
const Routes= require('./api/application');

module.exports = (app, pool) =>{
    const service = Services(pool);
    const route = Routes(service);

    app.get('/', route.apiLinks)
    app.get('/api/users', route.allUsers);
    app.get('/api/usersData', route.combiningRoute)
    app.get('/api/post/:username', route.namePost)
    app.get('/api/github', route.getGigHub)
}
