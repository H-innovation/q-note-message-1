AFRAME.registerComponent("markerhandler", {
	init: function () {
		console.log("connected");
		const animatedMarker = document.querySelector("#markerA");
		const aEntity = document.querySelector("#imageA");

		// every click, we make our model grow in size :)
		animatedMarker.addEventListener("click", function (ev, target) {
			const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
			alert("item clicked");
			if (aEntity && intersectedElement === aEntity) {
				const scale = aEntity.getAttribute("scale");
				Object.keys(scale).forEach((key) => (scale[key] = scale[key] + 1));
				aEntity.setAttribute("scale", scale);
			}
		});
	},
});
