// Back End
function PizzaOrder(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 10;
}
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
      var newPizza = new PizzaOrder(inputtedSize, inputtedToppings);
      console.log(newPizza);
      });
    });
  });
