const DBSettings = require("./db-config");
const AppSettings = require("./server-config");
const Application = require("./routing");
const app = AppSettings();
const db = DBSettings();
const application = Application(app,db);
const PORT = process.env.PORT || 2018;
app.listen(PORT, ()=> {console.log("Listening to port...."+PORT);});