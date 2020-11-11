$(document).ready(function(){
  $("#sp_navi_btn").click(function(){
    $(".sp_navi_toggle").slideToggle();
  });
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        autoplay: true,
    });
});

$(document).ready(function(){
  $("#page-link .toggle_link").click(function () { //id="categories-link h4"を押したら実行
      $(this).toggleClass("openlink"); // openlinkというclassを付与する
      $("#page-link .toggle_link + ul").slideToggle(); // id="categories-link"の後にあるh4直後のulを表示させる
  });
});

$(document).ready(function(){
  $("#categories-link .toggle_link").click(function () { //id="categories-link h4"を押したら実行
      $(this).toggleClass("openlink"); // openlinkというclassを付与する
      $("#categories-link .toggle_link + ul").slideToggle(); // id="categories-link"の後にあるh4直後のulを表示させる
  });
});

$(window).load(function(){
  $("#thumbnail img").click(function(){
    var img_src = $(this).attr("src");
    $("#main_image img").attr("src", img_src);
  });
});

