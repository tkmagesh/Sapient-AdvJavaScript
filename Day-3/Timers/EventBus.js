var eventBus = (function(){
	var subscriptions = {};
	function subscribe(eventName,subscription,context){
		if (!subscriptions[eventName])
			subscriptions[eventName] = [];
		subscriptions[eventName].push({subscription : subscription, context : context ? context : this});
	}

	function publish(eventName,arg){
		if (subscriptions[eventName]){
			var subscribers = subscriptions[eventName];
			for(var i=0;i<subscribers.length;i++){
				var subscriber = subscribers[i];
				subscriber.subscription.call(subscriber.context,arg);
			}
		}
	}
	function reset(){
		subscriptions = {};
	}
	return {
		publish : publish,
		subscribe : subscribe,
		reset : reset
	}
}());