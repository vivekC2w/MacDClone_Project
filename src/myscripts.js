function navigate() {
  window.location.href = "burger.html";
}

let btns = document.querySelectorAll(".addBtn");
// console.log(btns);

for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = showOrderSummary;
}

function showOrderSummary(event) {
  console.log(event.target.dataset);
  event.preventDefault();
  event.stopPropagation();

  let index = event.target.dataset.index;
  //Get the details of selected item
  var itemTitle = document.querySelectorAll(".card-title")[index].innerHTML;
  var itemPrice = parseFloat(
    document
      .querySelectorAll(".card-subtitle")
      [index].innerHTML.replace("$", "")
  );

  //calculate the total bill including GST
  var totalBill = (itemPrice * 1.05).toFixed(2);

  //Create the order summary text
  var selectedProductText = "Selected Product: " + itemTitle;
  var orderPriceText = "Order Price: $" + itemPrice.toFixed(2);
  var totalBillText = "Total Bill (including GST) : $" + totalBill;

  //Set the text of the order details elemts in the pop-up
  document.querySelector("#selected-product").innerHTML = selectedProductText;
  document.querySelector("#order-price").innerHTML = orderPriceText;
  document.querySelector("#total-bill").innerHTML = totalBillText;

  //Show the order summary pop-up
  document.querySelector("#order-summary").style.display = "block";
}

function hideOrderSummary() {
  //Hide the order summary pop-up
  document.querySelector("#order-summary").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  //Add a click event listner to the "Add+" button
  document
    .querySelector(".btn-primary")
    .addEventListener("click", function (event) {
      event.preventDefault();
      showOrderSummary();
    });

  // document.querySelector(".card").addEventListener("click", function (event) {
  //   window.location.href = "burger.html";
  // });
});
