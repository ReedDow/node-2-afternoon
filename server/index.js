const express = require("express");
const mc = require('./controller/messages_controller')

const app = express();
app.use(express.json());

const messagesBaseUrl = '/api/messages';
app.post(messagesBaseUrl, mc.create)
app.get(messagesBaseUrl, mc.read)
app.put(`${messagesBaseUrl}/:id`, mc.update)
app.delete(`${messagesBaseUrl}/:id`, mc.delete)

const serverPort = 3001;
app.listen(serverPort, () => {
    console.log(`Server listening on ${serverPort}`)
});




