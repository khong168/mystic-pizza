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

  if (this.toppings.length >= 1) {
    for (var i = 0; i < this.toppings.length; i++) {
      this.price += 1;
    }
    this.toppings = this.toppings.join(', ');
  }

  return this.size + ", " + this.toppings + ", $" + this.price;
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
      var newPizzaOrder = new PizzaOrder(inputtedSize, inputtedToppings);
      console.log(newPizzaOrder);
      var pizzaDisplay = newPizzaOrder.pizzaTotal();
      console.log(pizzaDisplay);
      $(".results").text(pizzaDisplay);



    });
  });
