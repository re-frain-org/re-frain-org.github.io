"use strict";
/**
 * @function Element#prependChild
 * @argument Element element
 * @this Element
 */
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
	const UsfrU8B3 = document.querySelector("#UsfrU8B3");
	const content = UsfrU8B3.content;
	const TVOxHpZ9 = content.querySelector(".TVOxHpZ9");
	const eFcynxxU = content.querySelector(".eFcynxxU");
	const WaWu7Va9 = content.querySelector(".WaWu7Va9");
	TVOxHpZ9.category = category;
	TVOxHpZ9.href = url;
	eFcynxxU.textContent = title;
	WaWu7Va9.src = image;
	c6JO6k62.prependChild(document.importNode(content, true));
}
/**
 * @function parseParameter
 * @return {string: string}
 */
function parseParameter() {
	const parameter = {};
	location.search.slice(1).split("&").forEach(query => {
		const [key, value = ""] = query.split("=");
		parameter[key] = value;
	});
	return parameter;
}
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