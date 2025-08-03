let flavors = prompt(
  "Please enter flavors of ice cream",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

// Parsing user input into array
flavors = flavors.split(",");
// console.log(flavors)

const getFlavors = (flavors) => {
  let customerOrders = {}; // create an empty object
  for (let flavor of flavors) {
    if (customerOrders[flavor]) {
      customerOrders[flavor] += 1;
    } else {
      customerOrders[flavor] = 1;
    }
  }
  return customerOrders;
};

console.log(getFlavors(flavors));
