const socket = (function() {
	let instance = {},
		isReady = false;

	return {
		getInstance: () => {
			return isReady ? instance : {};
		},
		setMiddleware: middleware => {
			console.log("INITIALIZED");
			instance.mw = middleware;
			isReady = true;
		}
	}
})();

module.exports = socket;