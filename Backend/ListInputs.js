const midi = require("easymidi");

console.log(`MIDI Devices:`);
midi.getInputs().forEach((element) => console.log(element))