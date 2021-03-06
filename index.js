const LiveCam = require('./livecam');
const addr = '127.0.0.1';
const webCamServer = new LiveCam({
  // address and port of the webcam UI
  'ui_addr' : addr,
  'ui_port' : 11000,

  // address and port of the webcam Socket.IO server
  // this server broadcasts GStreamer's video frames
  // for consumption in browser side.
  'broadcast_addr' : addr,
  'broadcast_port' : 12000,

  // address and port of GStreamer's tcp sink
  'gst_tcp_addr': addr,
  'gst_tcp_port' : 10000,

  // callback function called when server starts
  'start' : function() {
    console.log('WebCam server started!');
  },

  // webcam object holds configuration of webcam frames
  'webcam' : {

    // should frames be converted to grayscale (default : false)
    'grayscale' : false,

    // should width of the frame be resized (default : 0)
    // provide 0 to match webcam input
    'width' : 700,

    // should height of the frame be resized (default : 0)
    // provide 0 to match webcam input
    'height' : 400,

    // should a fake source be used instead of an actual webcam
    // suitable for debugging and development (default : false)
    'fake' : false,

    // framerate of the feed (default : 0)
    // provide 0 to match webcam input
    'framerate' : 24
  }
});

webCamServer.broadcast();
