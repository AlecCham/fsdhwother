//Concatination and Interpolation

var price = 50;
var itemName = "Cup";
var messageToPrint = "The price for your " + itemName + " is " + price + " dollars.";
console.log(messageToPrint);

var messageToPrintIntepolation = `The price for your ${itemName} is ${price} dollars.`;
console.log(messageToPrintIntepolation);
console.log(messageToPrint == messageToPrintIntepolation);