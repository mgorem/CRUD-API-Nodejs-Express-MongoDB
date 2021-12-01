module.exports = (app) => {
    const App = require("../controllers/app.controller.js");
    app.post("/create", App.create);
    app.get("/get-all", App.findAll);
    app.post("/message/:messageID", App.findOne);
    app.post("/message/:messageID", App.update);
    app.post("/message/:messageID", App.delete);
};