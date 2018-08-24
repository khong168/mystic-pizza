// Back End
function PizzaOrder(size, toppings, veggies) {
  this.size = size;
  this.toppings = toppings;
  this.veggies = veggies;
  this.price = 10;
}

PizzaOrder.prototype.pizzaTotal = function() {
    if (this.delivery === "delivery") {
      this.price = this.price + 4;
    }
    if (this.size === "small") {
      this.price = this.price + 2;
    }
    if (this.size === "medium") {
      this.price = this.price + 4;
    }
    if (this.size === "large") {
      this.price = this.price + 6;
    }

    if (this.toppings.length >= 1) {
      for (var i = 0; i < this.toppings.length; i++) {
        this.price += 2;
      }
      this.toppings = this.toppings.join(', ');
    }

    if (this.veggies.length >= 1) {
      for (var j = 0; j < this.veggies.length; j++) {
        this.price += 1;
      }
      this.veggies = this.veggies.join(', ');
    }


      return this.size + ", " + this.toppings + ", " + this.veggies + ", $" + this.price;
    };
    // Front End
    $(document).ready(function() {
      $("form#size").submit(function(event) {
        event.preventDefault();
        var inputtedDelivery = $('input[name=delivery]:checked').val();
        console.log(inputtedDelivery);
        var inputtedSize = $("#pizzaSize").val();
        console.log(inputtedSize);
        var inputtedToppings = [];
        $.each($("input[name='toppings']:checked"), function() {
          inputtedToppings.push($(this).val());
          console.log(inputtedToppings);
        });
        var inputtedVeggies = [];
        $.each($("input[name='veggies']:checked"), function() {
          inputtedVeggies.push($(this).val());
          console.log(inputtedVeggies);
        });
        var newPizzaOrder = new PizzaOrder(inputtedSize, inputtedToppings, inputtedVeggies);
        console.log(newPizzaOrder);
        var pizzaDisplay = newPizzaOrder.pizzaTotal();
        console.log(pizzaDisplay);
        $(".results").text(pizzaDisplay);



      });
    });
