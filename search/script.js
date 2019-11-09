"use strict";
const {keyword} = parseQuery();
if (keyword !== undefined && keyword !== "") {
	const a = document.createElement("a");
	a.href = `/search/?keyword=${keyword}`;
	a.textContent = keyword;
	a.setAttribute("class", "TnBfB6P0");
	const li = document.createElement("li");
	li.setAttribute("class", "tvSFfqLi");
	li.appendChild(a);
	YFoSPTA3.appendChild(li);
	database.ref("news").once("value", snapshot => {
		const val = snapshot.val();
		if (val !== null) Object.values(val).filter((value = "") => String(value.title).match(new RegExp(keyword))).forEach(createListItem);
	});
}