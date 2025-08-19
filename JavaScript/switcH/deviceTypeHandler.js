function deviceTypeHandler(deviceType) {
  switch (deviceType) {
    case 'mobile':
      console.log("Redirect to mobile version");
      break;
    case 'tablet':
      console.log("Optimize layout for tablet");
      break;
    case 'desktop':
      console.log("Load desktop UI");
      break;
    default:
      console.log("Unknown device type");
  }
}
deviceTypeHandler("desktop")