$(document).ready(function() {
  $("form#size").submit(function(event) {
    event.preventDefault();
    var inputtedSize = $("#pizzaSize").val();
    console.log(inputtedSize);
  });
});
