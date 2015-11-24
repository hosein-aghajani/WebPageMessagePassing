alert("hey content");
var port = chrome.runtime.connect({name:"mycontentscript"});
port.onMessage.addListener(function(message, sender){
  if(message.greeting == "hey"){
    alert("message from background: " + message.greeting);
	port.postMessage({greeting:"salam"});
  }
  else if(message.greeting == "H R U?"){
    alert("message from background: " + message.greeting);
	port.postMessage({greeting:"khobam"});
  }
  else{
    alert("content did not receive hello");
    port.postMessage({greeting:"no salam"});
  }
});
