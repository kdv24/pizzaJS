var Pizza = {
  init: function(){
      this.type = [];
      this.size = [];
  },
  getPrice: function(){
      return 10 + parseInt(this.type * 2)
                + parseInt(this.size * 2);
  }
};

$(document).ready(function(){
  $("form#order_form").submit(function(event){
    event.preventDefault();

    var newPizza = Object.create(Pizza);
    newPizza.init();
    newPizza.type = $("select#pizza_type").val();
    console.log(newPizza.type);
    newPizza.size = $("select#pizza_size").val();
    console.log(newPizza.type);
    var pizzaCost = newPizza.getPrice();
    console.log(pizzaCost);

    $("select#pizza_type").val("");
    $("select#pizza_size").val("");

    $(".pizza_cost").text(pizzaCost);

  });
});
