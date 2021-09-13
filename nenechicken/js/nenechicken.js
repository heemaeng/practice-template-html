$(function () {
  $(".hmenu")
    .mouseover(function () {
      $(this).attr("src", "./images/selected_1.png");
    })
    .mouseout(function () {
      $(this).attr("src", "./images/normal_1.png");
    });
  $(".hstore")
    .mouseover(function () {
      $(this).attr("src", "./images/selected_2.png");
    })
    .mouseout(function () {
      $(this).attr("src", "./images/normal_2.png");
    });
  $(".hevent")
    .mouseover(function () {
      $(this).attr("src", "./images/selected_3.png");
    })
    .mouseout(function () {
      $(this).attr("src", "./images/normal_3.png");
    });
  $(".hfran")
    .mouseover(function () {
      $(this).attr("src", "./images/selected_4.png");
    })
    .mouseout(function () {
      $(this).attr("src", "./images/normal_4.png");
    });
  $(".habout")
    .mouseover(function () {
      $(this).attr("src", "./images/selected_5.png");
    })
    .mouseout(function () {
      $(this).attr("src", "./images/normal_5.png");
    });
});
