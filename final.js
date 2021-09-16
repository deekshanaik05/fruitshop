const table = document.querySelector("table");
const totalDisplay = document.querySelector("h3 span");
// console.log(JSON.parse(localStorage.getItem("final_items")));
const itemList = JSON.parse(localStorage.getItem("final_items"));
const confirmBtn = document.querySelector("#confirm");

console.log(itemList);

itemList.forEach((element) => {
	// console.log(element.item);
	table.innerHTML += `<tr>
		<td>${element.item}</td>
		<td>${element.quantity}</td>
		<td>${element.unit}</td>
		<td>${element.net}</td>
	</tr>`;
});

let totalPrice = 0;
itemList.forEach((item) => {
	totalPrice += item.net;
});
totalDisplay.innerText += totalPrice;
// console.log(totalPrice);

confirmBtn.addEventListener("click", () => {
	localStorage.clear();
	window.history.back();
});

