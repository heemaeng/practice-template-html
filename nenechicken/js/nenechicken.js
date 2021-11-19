$(function () {
  function neneMain() {
    var wW = $(window).width();
    var mainMargin = 6; //가운데 나누는 마진값
    $(".mainPadding").css("margin", mainMargin + "px");

    var mainW = $(".main_01_img .mainPadding").width();
    var secondW = mainW / 2 - mainMargin; //반 6=가운데 마진준값
    var thirdW = secondW / 2 - mainMargin; //4분의1 6=가운데 마진준값
    var fourthW = thirdW / 2; //8분의1

    $(".main_01_img .mainPadding").height(mainW); //메인이미지 높이주고
    $(".main_06_video .mainPadding").height(mainW); //메인영상 높이 주고

    $(".main_03_bestOrder .bestMenu").height(secondW); //반띵한 높이주고 베스트메뉴
    $(".main_02_levent .mainPadding").height(secondW); //반띵한 높이주고 이벤트

    $(".main_07_store .findStore").height(secondW); //반띵한 높이주고 매장찾기
    $(".main_07_store .fourInfo").height(secondW); //반띵한 높이주고 사등분 고객의소리

    if (wW < 750) {
      $(".main_04_bestOrder .onlineOrder").height(secondW); //반띵한 높이주고 온라인 주문
      $(".main_04_bestOrder_m .onlineOrder").height(secondW); //반띵한 높이주고 온라인 주문
    } else {
      $(".main_04_bestOrder .onlineOrder").height(thirdW); //반띵한 높이주고 온라인 주문
      $(".main_04_bestOrder_m .onlineOrder").height(thirdW); //반띵한 높이주고 온라인 주문
    }
    $(".main_02_2facebook .mainPadding").height(thirdW); //반띵한 높이주고 페이스북
    $(".mainNoticeLine")
      .height(fourthW)
      .css("line-height", fourthW + "pw"); //반띵한 높이주고 공지
    $(".mainEventLine")
      .height(fourthW)
      .css("line-height", fourthW + "px"); //반띵한 높이주고 이벤트

    if (wW < 1008) {
      $(".main_08_gallery .mainSns").height(thirdW); //반띵한 높이주고 sns
    } else {
      $(".main_08_gallery .mainSns").height(secondW); //반띵한 높이주고 sns
    }
    if (wW < 1008) {
      $(".main_08_gallery .mainGallery").height(thirdW); //반띵한 높이주고 사등분 갤러리
    } else {
      $(".main_08_gallery .mainGallery").height(secondW); //반띵한 높이주고 사등분 갤러리
    }

    if (wW < 750) {
      $("iframe").css("width", "90%");
      $("iframe").css("height", "250px");
    } else {
    }
  }
  neneMain();

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
}); //ready
