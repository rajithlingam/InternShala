function smartHomeCommandHandling(command) {
  switch (command) {
    case 'on':
      console.log("Lights turned on.");
      break;
    case 'set thermostat to 24':
      console.log("Thermostat set to 24°C.");
      break;
    case 'play music':
      console.log("Playing your favorite playlist.");
      break;
    case 'lock doors':
      console.log("All doors locked.");
      break;
    default:
      console.log("Command not recognized.");
  }
}
smartHomeCommandHandling("on")