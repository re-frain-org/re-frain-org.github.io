"use strict";
const search = location.search.slice(1);
const parameter = {};
search.split("&").forEach(query => {
	const [key, value] = query.split("=");
	parameter[key] = value;
});
if (parameter.keyword !== undefined && parameter.keyword !== "") {
	database.ref("news").once("value", snapshot => {
		const val = snapshot.val();
		if (val !== null) Object.values(val).filter(value => value.title.toString().match(new RegExp(parameter.keyword))).forEach(createListItem);
	});
}