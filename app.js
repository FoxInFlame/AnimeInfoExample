$(document).ready(function() {
  $(".season-card--season").each(function(index) {
    if($(".season-card--season")[index]) {
      if($(this).hasClass("active")) {
        $(this).children(".hidden").show();
      } else {
        $(this).children(".hidden").hide();
      }
    }
  });
});

$(".season-card--season-title").on("click", function() {
  if($(this).parent().hasClass("active")) {
    $(this).parent().removeClass("active").children(".hidden").slideUp(225);
    return;
  }
  $(".season-card--season.active").removeClass("active").children(".hidden").slideUp(225);
  $(this).parent().addClass("active").children(".hidden").slideDown(225);
});

$.ajax({
  url: "http://www.foxinflame.tk/AnimeInfo/authorize.php",
  type: "GET",
  success: function(data) {
    console.log(data);
  },
  error: function(jqXHR, textStatus, thrownError) {
    console.log(textStatus);
    console.log(jqXHR);
    console.log(thrownError);
  }
});