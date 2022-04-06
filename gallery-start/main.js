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
}
thumbBarImages(imagesArray);

// Display the clicked picture in the displayed image div

thumbBar.addEventListener("click", function () {
	// Find the source of the clicked image
	const imgSource = event.target.src;

	//Change the displayed image src to the clicked image source
	displayedImage.src = imgSource;
});

// Adding functionality to the Darken button
/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", function () {
	const btnAttribute = btn.getAttribute("class");
	console.log(btnAttribute);
	if (btnAttribute == "dark") {
		btn.setAttribute("class", "light");
		btn.textContent = "Lighten";
		overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
	} else {
		btn.setAttribute("class", "dark");
		btn.textContent = "Darken";
		overlay.style.backgroundColor = "rgba(0,0,0,0.0)";
	}
});
