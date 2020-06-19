import { Component } from '@angular/core';

// ionic plugin add https://github.com/yasirkula/UnityIonicIntegration.git
// Should put declare before any @Component's
declare let unityARCaller: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  openUnity() {
		// It is possible to send a string message to Unity-side (optional)
		unityARCaller.launchAR( "my message for Unity-side", this.uReturnedFromUnity, this.uMessageReceivedFromUnity );
	}
	
	sendMessageToUnity() {
		// Send a message to Unity while Unity is still running
		unityARCaller.sendMessage( "Function name", "Optional parameter" );
	}
	
	uReturnedFromUnity = (param) => {
		// param:String is the (optional) message returned from Unity-side
		alert( param );
	};
	
	uMessageReceivedFromUnity = (message) => {
		// message:String is the message received from Unity-side
		// If you call a UI-blocking function here like 'alert', subsequent messages from Unity
		// will be queued by the OS and will only be received after returning to Ionic and
		// unblocking the UI
		console.log( "=========" + message + "=========" );
	};

}
