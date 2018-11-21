const Services = require('./services/service);
const Routes= require('./application');

module.exports = (app, routes)=>{
    app.get('/', routes.home);

}