function gameDifficultySetting(level) {
  switch (level) {
    case 'easy':
      console.log("Enemies move slow, more health.");
      break;
    case 'medium':
      console.log("Standard difficulty set.");
      break;
    case 'hard':
      console.log("Enemies aggressive, less player health.");
      break;
    case 'insane':
      console.log("One life, faster enemies!");
      break;
    default:
      console.log("Invalid difficulty level.");
  }
}
gameDifficultySetting("insane")