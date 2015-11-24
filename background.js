alert("hey back");
chrome.runtime.onConnectExternal.addListener(function(port){
  port.postMessageExternal({greeting:"hey"});
  port.onMessageExternal.addListener(function(message, sender){
  if(message.greeting == "salam"){
    alert("message from content: " + message.greeting);
	port.postMessageExternal({greeting:"H R U?"});
  }
  else if(message.greeting == "khobam")
  {
      alert("message from content: " + message.greeting);
  }
  else{
    alert("background did not receive salam");
  }
});
});

