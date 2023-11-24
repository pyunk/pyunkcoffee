// Variables for prices
let flatWhite = 2.5;
let cappuccino = 3.5;
let hazelnutLatte = 4.5;
let espresso = 2;
let turkish = 2.5;
let mocha = 4;

// Function to get the selected option
function getOption() {
    // Variables for selected options
    let select = document.getElementById("select1");
    let selectedOption = select.options[select.selectedIndex].value;

    // Variable for quantity
    let quantity = document.getElementById("qnum").value;

    // Variable for price based on the selected option
    let price;
    switch (selectedOption) {
        case "Flat white":
            price = flatWhite;
            break;
        case "cappucino":
            price = cappuccino;
            break;
        case "Hazelnut Latte":
            price = hazelnutLatte;
            break;
        case "Espresso":
            price = espresso;
            break;
        case "Turkish":
            price = turkish;
            break;
        case "Mocha":
            price = mocha;
            break;
    }

    // Variable for total price
    let total = price * quantity;

    // Display the selected option, quantity, price, and total price
    document.getElementsByClassName("output")[0].textContent = selectedOption;
    document.getElementsByClassName("quantity")[0].textContent = quantity;
    document.getElementsByClassName("price")[0].textContent = price.toFixed(2);
    document.getElementsByClassName("total")[0].textContent = total.toFixed(2);
}

// Function to handle button click
function handleClick() {
    alert("Thank you for your order!");
    console.log("Order placed: " + document.getElementsByClassName("output")[0].textContent);
}

// Call the getOption function periodically
setInterval(getOption, 1000);

// Add event listener to the button
document.getElementById("button").addEventListener("click", handleClick);