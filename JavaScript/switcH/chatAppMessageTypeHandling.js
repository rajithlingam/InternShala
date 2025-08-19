function chatAppMessageTypeHandling(messageType) {
  switch (messageType) {
    case "text":
      console.log("Display text message");
      break;
    case "image":
      console.log("Render image preview");
      break;
    case "video":
      console.log("Play embedded video");
      break;
    case "file":
      console.log("Show download link");
      break;
    default:
      console.log("Unsupported message type");
  }
}

chatAppMessageTypeHandling("image");
