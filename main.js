chrome.app.runtime.onLaunched.addListener(function() {
  // Center window on screen.
  var screenWidth = screen.availWidth;
  var screenHeight = screen.availHeight;
  var width = 500;
  var height = 300;

  chrome.app.window.create('index.html', {
    id: "pinyinAppID",
    outerBounds: {
      width: width,
      height: height,
      left: Math.round(screenWidth-width),
      top: 0
    }
  });
});
