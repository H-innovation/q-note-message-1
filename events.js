console.log("connected");
AFRAME.registerComponent("markerhandler", {
	init: function () {
		const animatedMarker = document.querySelector("#markerA");
		const aEntity = document.querySelector("#imageA");

		// every click, we make our model grow in size :)
		this.el.addEventListener("click", function (ev, target) {
			alert("item clicked");
			// const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
			// if (aEntity && intersectedElement === aEntity) {
			// 	const scale = aEntity.getAttribute("scale");
			// 	Object.keys(scale).forEach((key) => (scale[key] = scale[key] + 1));
			// 	aEntity.setAttribute("scale", scale);
			// }
		});
	},
});
