console.log("hey content");
var port = chrome.runtime.connect("gojbkealfcnanhhicpaneffaecjfajfk", {name:"mycontentscript"});
port.onMessage.addListener(function(message, sender){
  if(message.greeting == "hey"){
    console.log("message from background: " + message.greeting);
	port.postMessage({greeting:"salam"});
  }
  else if(message.greeting == "H R U?"){
    console.log("message from background: " + message.greeting);
	port.postMessage({greeting:"khobam"});
  }
  else{
    console.log("content did not receive hello");
    port.postMessage({greeting:"no salam"});
  }
});
