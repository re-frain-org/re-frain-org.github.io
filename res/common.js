"use strict";
Element.prototype.prependChild = function(element) {
	this.insertBefore(element, this.firstChild);
};
/**
 * @function createListItem
 * @argument {category: string, image: string, title: string, url: string}
 * @property string category
 * @property string image
 * @property string title
 * @property string url
 */
function createListItem({category = "other", image = "", title = "", url = ""}) {
	const W1JhWxuv = document.createElement("article");
	W1JhWxuv.setAttribute("class", "W1JhWxuv");
	const TVOxHpZ9 = document.createElement("a");
	TVOxHpZ9.href = url;
	TVOxHpZ9.setAttribute("category", "other");
	TVOxHpZ9.setAttribute("class", "TVOxHpZ9");
	const eFcynxxU = document.createElement("h1");
	eFcynxxU.textContent = title;
	eFcynxxU.setAttribute("class", "eFcynxxU");
	const WaWu7Va9 = document.createElement("img");
	WaWu7Va9.src = image;
	WaWu7Va9.setAttribute("class", "WaWu7Va9");
	TVOxHpZ9.appendChild(eFcynxxU);
	TVOxHpZ9.appendChild(WaWu7Va9);
	W1JhWxuv.appendChild(TVOxHpZ9);
	c6JO6k62.prependChild(W1JhWxuv);
}
firebase.initializeApp({
	apiKey: "AIzaSyCAtEoI6peuGpSvRlvTkjspSU0LxIX4cb4",
	appId: "1:192927222320:web:7a6c7b159ce8495d",
	authDomain: "re-frain-org.firebaseapp.com",
	databaseURL: "https://re-frain-org.firebaseio.com",
	messagingSenderId: "192927222320",
	projectId: "re-frain-org",
	storageBucket: "re-frain-org.appspot.com"
});
const database = firebase.database();
mWYXHFlu.addEventListener("keydown", event => {
	switch (event.keyCode) {
		case 13:
			location.href = `/search/?keyword=${mWYXHFlu.value}`;
			event.preventDefault();
			break;
		default:
			break;
	}
});
SYaLdKxJ.addEventListener("click", event => location.href = `/search/?keyword=${mWYXHFlu.value}`);