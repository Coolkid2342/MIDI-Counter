const midi = require("easymidi");
const { Devices } = require("./config.json")
const WebSocket = require("ws")
const ws = new WebSocket.Server({ port: 5328 });

let count;
count = 0;

midi.getInputs().forEach((inputName) => {
    if (Devices.includes(inputName)) {
        const input = new midi.Input(inputName)
        input.on('message', (msg) =>{
            console.log(msg)
            if (msg._type === "noteon") {
                console.log("Going into if statement")
                count++;
                ws.clients.forEach(function each(client) {
                    if(client.readyState === WebSocket.OPEN) {
                        console.log("GoingUp!")
                        var array = {"count": count}
                        client.send(JSON.stringify(array))
                    }
                })
            }
        })
    }
})

ws.on("connection", function connection(ws) {
    var pongArray = {"Pong": "Pong"}
    ws.send(JSON.stringify(pongArray))
})