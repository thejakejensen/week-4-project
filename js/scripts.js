//Buisness time
//----------------------
function Pizza(pizzaSize, cheese) {
  this.pizzaSize = pizzaSize;
  this.cheese = cheese;
  this.vegToppings = [];
}
//price calculator
Pizza.prototype.addCost = function() {
  var cost = 0;
  if (this.pizzaSize === "medium") {
    cost = 5;
  } else if (this.pizzaSize === "small") {
    cost = 3;
  } else if (this.pizzaSize === "large") {
    cost = 8;
  } else if (this.pizzaSize === "extra large") {
    cost = 10;
    this.vegToppings.forEach(function() {
      cost += 0.50;
    });
  }
  this.cost = cost;
}
Pizza.prototype.addVeg = function(veggie) {
  this.vegToppings.push(veggie);
}
