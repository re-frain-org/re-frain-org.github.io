"use strict";
database.ref("news").limitToLast(4).once("value", snapshot => {
	const val = snapshot.val();
	if (val !== null) Object.values(val).forEach(createListItem);
});