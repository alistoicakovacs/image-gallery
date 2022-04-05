const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */
const imagesArray = [
	"/images/pic1.jpg",
	"/images/pic2.jpg",
	"/images/pic3.jpg",
	"/images/pic4.jpg",
	"/images/pic5.jpg",
];
/* Looping through images */
function thumbBarImages(arr) {
	for (i = 0; i < arr.length; i++) {
		const newImage = document.createElement("img");
		newImage.setAttribute("src", imagesArray[i]);
		thumbBar.appendChild(newImage);
	}

	const currentSrcValue = document.querySelector("img");

	thumbBar.addEventListener("click", function () {
		for (i = 0; i < thumbBar.length; i++) {
			this.getAttribute("src");
			console.log(this);
		}
	});
}
thumbBarImages(imagesArray);

// Display the clicked picture in the displayed image div

// imagesArray.addEventListener("click", function () {});

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", function () {
	displayedImage.classList.add("overlay");
});
