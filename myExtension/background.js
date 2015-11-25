console.log("hey back");
chrome.runtime.onConnectExternal.addListener(function(port){
  port.postMessage({greeting:"hey"});
  port.onMessage.addListener(function(message, sender){
  if(message.greeting == "salam"){
    console.log("message from content: " + message.greeting);
	port.postMessage({greeting:"H R U?"});
  }
  else if(message.greeting == "khobam")
  {
      console.log("message from content: " + message.greeting);
  }
  else{
    console.log("background did not receive salam");
  }
});
});
