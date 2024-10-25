const customerName = document.getElementById("customer-name");
const customerAddress = document.getElementById("customer-address");
let customerPayment = document.getElementById("customer-payment");

const productName = document.getElementById("selected-product-name").innerHTML;
let productPrice = document.getElementById("selected-product-price").innerHTML;

function confirmOrder() {
  let price = parseFloat(productPrice.substring(1));

  let payment = customerPayment.value;
  let change = 0.0;

  if (
    customerName.value === "" ||
    customerAddress.value === "" ||
    customerPayment.value === ""
  ) {
    alert("To complete your order\nPlease fill in all the required field\n");
  } else if (!payment.match(/^\d{1,5}(?:[ ,]\d{3})*(?:\.\d{1,2})?$/)) {
    customerPayment.value = "";
  } else {
    if (payment.includes(" ") || payment.includes(",")) {
      payment = payment.replaceAll(" ", "");
      payment = payment.replaceAll(",", "");
    }
    payment = parseFloat(payment);

    if (payment < price) {
      alert("Insuffiecient Payment\nPlease try again");
    } else {
      change = payment - price;
      if (
        confirm(
          `Order details\n--------------------------------------------------\nproduct:      ${productName}\nName:         ${
            customerName.value
          }\nAddress;     ${
            customerAddress.value
          }\nPayment;     ₱${payment.toFixed(
            2
          )}\n--------------------------------------------------\nChange:       ₱${change.toFixed(
            2
          )}`
        )
      ) {
        alert("Order confirmed");
        customerName.value = "";
        customerAddress.value = "";
        customerPayment.value = "";
      }
    }
  }
}
