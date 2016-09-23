chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('app.html', {
    outerBounds: {
      width: 360,
      height: 640
    },
    //alwaysOnTop: true,
    resizable: false,
    frame: {
      type: 'chrome',
      color: '#0288d1'
    },
  });
});