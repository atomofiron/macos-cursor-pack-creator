
function loadDefaultImages() {

	for (let i in images) {
		base64toImage(i, images[i])
	}
}

loadDefaultImages()