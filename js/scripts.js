$(document).ready(function() {

  $("input:radio[name=type]").click(function () {
    if($("input:radio[name=type]:checked").val() === "buy") {
      $(".rent").hide();
      $(".buy").show();
    } else {
      $(".buy").hide();
      $(".rent").show();
    }
  });

  $("form").submit(function(event) {
    var price = 0;
    if($("#dragon").val()==="European") {
      if($("input:radio[name=type]:checked").val() === "buy") {
        price=2500000;
      } else {
        if($("#rentCost").val()==="Daily") {
          price=10000;
        } else if($("#rentCost").val()==="Weekly") {
          price=50000;
        } else if($("#rentCost").val()==="Monthly") {
          price=150000;
        } else {
          alert("You need to select a length of rental!");
        }
      }

    } else if($("#dragon").val()==="Chinese") {
      if($("input:radio[name=type]:checked").val() === "buy") {
        price=250000;
      } else {
        if($("#rentCost").val()==="Daily") {
          price=1000;
        } else if($("#rentCost").val()==="Weekly") {
          price=5000;
        } else if($("#rentCost").val()==="Monthly") {
          price=15000;
        } else {
          alert("You need to select a length of rental!");
        }
      }
    } else if($("#dragon").val()==="Komodo") {
      if($("input:radio[name=type]:checked").val() === "buy") {
        price=25000;
      } else {
        if($("#rentCost").val()==="Daily") {
          price=100;
        } else if($("#rentCost").val()==="Weekly") {
          price=500;
        } else if($("#rentCost").val()==="Monthly") {
          price=1500;
        } else {
          alert("You need to select a length of rental!");
        }
      }
    } else {
      alert("You need to select a dragon type!");
    }

    switch ($("#ship").val()) {
      case "Pickup":
        price += 0;
        break;
      case "overNight":
        price += 9999.99;
        break;
      case "Week":
        price += 1.95;
        break;
      default:
      alert("You need to select a shipping cost!")
    }

    $(".name").text($("input#name").val());
    $(".address").text($("input#address").val());
    $(".city").text($("input#city").val());
    $(".state").text($("input#state").val());
    $(".zip").text($("input#zip").val());
    $(".price").text(price);
    $(".ship").text($("#ship").val());
    $(".dragon").text($("#dragon").val());
    $(".rentCost").text($("#rentCost").val());
    $(".order").show();

     event.preventDefault();
    $("form").hide();
  });

});
