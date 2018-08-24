// Back End
function PizzaOrder(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 10;
}

PizzaOrder.prototype.pizzaTotal = function() {
  if (this.size === "small") {
    this.price = this.price +2;
  }
  if (this.size === "medium") {
    this.price = this.price +4;
  }
  if (this.size === "large") {
    this.price = this.price +6;
  }
  return this.price;
//   if (this.age === "senior") {
//     this.price -= 2;
//   }
//   if (this.name === "StarWars") {
//     this.price -= 2;
//   }
//   if (this.snacks.length >= 1) {
//     for (var i = 0; i < this.snacks.length; i++) {
//       this.price += 1;
//     }
//     this.snacks = this.snacks.join(', ');
//     // console.log(this.snacks);
// }
//   return this.name + ", " + this.time + ", " + this.age + ", " + this.price + ", " + this.snacks;
};
  // Front End
  $(document).ready(function() {
    $("form#size").submit(function(event) {
      event.preventDefault();
      var inputtedSize = $("#pizzaSize").val();
      console.log(inputtedSize);
      var inputtedToppings = [];
      $.each($("input[name='toppings']:checked"), function() {
        inputtedToppings.push($(this).val());
      console.log(inputtedToppings);
    });
      var newPizza = new PizzaOrder(inputtedSize, inputtedToppings);
      console.log(newPizza);
      var pizzaDisplay = newPizza.pizzaTotal();
      console.log(pizzaDisplay);


    });
  });
