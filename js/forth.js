$(".aladin_hoverbox").mouseover(function () {
  console.log("a");
  $(this).addClass("active").siblings().removeClass("active");
});

$(".prev").click(function () {
  $(".slide li:last").prependTo(".slide");
  $(".slide").css("margin-left", "-33.33%");
  $(".slide").stop().animate({ marginLeft: 0 }, 500);
});

$(".next").click(function () {
  $(".slide")
    .stop()
    .animate({ marginLeft: "-33.33%" }, 500, function () {
      $(".slide li:first").appendTo(".slide");
      $(".slide").css({ marginLeft: 0 });
    });
});




$(function () {
  $('.aladin_hoverbox').click(function () {
    let idx=$(this).index();
    console.log(idx)

    $(".aladin_first_middle .sub").eq(idx).fadeIn().css('display',"flex").siblings('.sub').hide();
  });




  

  
  // $('.aladin_hoverbox:nth-of-type(2)').click(function () {
  //   $(".aladin_first_middlesub1").fadeIn().siblings('.sub').hide();
  // });

  // $('.aladin_hoverbox:nth-of-type(3)').click(function () {
  //   $(".aladin_first_middlesub2").fadeIn().siblings('.sub').hide();
  // });

  // $('.aladin_hoverbox:nth-of-type(4)').click(function () {
  //   $(".aladin_first_middlesub3").fadeIn().siblings('.sub').hide();
  // });

  // $('.aladin_hoverbox:nth-of-type(5)').click(function () {
  //   $(".aladin_first_middlesub4").fadeIn().siblings('.sub').hide();
  // });

  // $('.aladin_hoverbox:nth-of-type(6)').click(function () {
  //   $(".aladin_first_middlesub5").fadeIn().siblings('.sub').hide();
  // });

  // $('.aladin_hoverbox:nth-of-type(7)').click(function () {
  //   $(".aladin_first_middlesub6").fadeIn().siblings('.sub').hide();
  // });

  // $('.aladin_hoverbox:nth-of-type(8)').click(function () {
  //   $(".aladin_first_middlesub7").fadeIn().siblings('.sub').hide();
  // });

  // $('.aladin_hoverbox:nth-of-type(9)').click(function () {
  //   $(".aladin_first_middlesub8").fadeIn().siblings('.sub').hide();
  // });
});




$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "경제" },
  headers: { Authorization: "KakaoAK 45941751e295b1ee1621bc1864a3716e" },
}).done(function (msg) {
  console.log(msg);

  let origin = msg.documents;

  //썸네일이 빈 문자열인것은 제외
  let data = origin.filter((val) => {
    return val.thumbnail != "";
  });

  console.log(data);

  for (let i = 0; i < 4; i++) {
    $(".imgbox")
      .eq(i)
      .append("<img src='" + data[i].thumbnail + "'/>");
    $(".imgbox")
      .eq(i)
      .append("<h3>" + data[i].title + "</h3>");

    var str = data[i].contents;
    var str2 = str.substring(0, 0);

    $(".imgbox")
      .eq(i)
      .append("<p>" + str2 + "</p>");

    $(".imgbox")
      .eq(i)
      .append("<button>" + "장바구니 담기" + "</button>");
  }
});

// $.ajax({
//     method: "GET",
//     url: "https://dapi.kakao.com/v3/search/book?target=title",
//     data: { query: "피에 젖은 땅"
//  },
//     headers: { Authorization: "KakaoAK 45941751e295b1ee1621bc1864a3716e" }
// })

// .done(function (msg) {

//     $(".imgbox").append("<img src='" + msg.documents[0].thumbnail + "'/>");
//     $(".imgbox").append("<h3>" + msg.documents[0].title + "</h3>");
//     $(".imgbox").append("<h6>" + msg.documents[0].authors[0] + "</h6>");

//     var str = msg.documents[0].contents;
//     var str2 = str.substring(0, 60);

//     $(".imgbox").append("<p>" + str2 + "</p>");

//     $(".imgbox").append("<button>" + "click" + "</button>");

// });


$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "뇌과학" },
  headers: { Authorization: "KakaoAK 45941751e295b1ee1621bc1864a3716e" },
}).done(function (msg) {
  console.log(msg);

  let origin = msg.documents;

  //썸네일이 빈 문자열인것은 제외
  let data = origin.filter((val) => {
    return val.thumbnail != "";
  });

  console.log(data);

  for (let i = 0; i < 4; i++) {
    $(".imgbox1")
      .eq(i)
      .append("<img src='" + data[i].thumbnail + "'/>");
    $(".imgbox1")
      .eq(i)
      .append("<h3>" + data[i].title + "</h3>");

    var str = data[i].contents;
    var str2 = str.substring(0, 0);

    $(".imgbox1")
      .eq(i)
      .append("<p>" + str2 + "</p>");

    $(".imgbox1")
      .eq(i)
      .append("<button>" + "장바구니 담기" + "</button>");
  }
});


$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "오펜하이머" },
  headers: { Authorization: "KakaoAK 45941751e295b1ee1621bc1864a3716e" },
}).done(function (msg) {
  console.log(msg);

  let origin = msg.documents;

  //썸네일이 빈 문자열인것은 제외
  let data = origin.filter((val) => {
    return val.thumbnail != "";
  });

  console.log(data);

  for (let i = 0; i < 4; i++) {
    $(".imgbox2")
      .eq(i)
      .append("<img src='" + data[i].thumbnail + "'/>");
    $(".imgbox2")
      .eq(i)
      .append("<h3>" + data[i].title + "</h3>");

    var str = data[i].contents;
    var str2 = str.substring(0, 0);

    $(".imgbox2")
      .eq(i)
      .append("<p>" + str2 + "</p>");

    $(".imgbox2")
      .eq(i)
      .append("<button>" + "장바구니 담기" + "</button>");
  }
});


$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "과학고전" },
  headers: { Authorization: "KakaoAK 45941751e295b1ee1621bc1864a3716e" },
}).done(function (msg) {
  console.log(msg);

  let origin = msg.documents;

  //썸네일이 빈 문자열인것은 제외
  let data = origin.filter((val) => {
    return val.thumbnail != "";
  });

  console.log(data);

  for (let i = 0; i < 4; i++) {
    $(".imgbox3")
      .eq(i)
      .append("<img src='" + data[i].thumbnail + "'/>");
    $(".imgbox3")
      .eq(i)
      .append("<h3>" + data[i].title + "</h3>");

    var str = data[i].contents;
    var str2 = str.substring(0, 0);

    $(".imgbox3")
      .eq(i)
      .append("<p>" + str2 + "</p>");

    $(".imgbox3")
      .eq(i)
      .append("<button>" + "장바구니 담기" + "</button>");
  }
});



$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "죽음" },
  headers: { Authorization: "KakaoAK 45941751e295b1ee1621bc1864a3716e" },
}).done(function (msg) {
  console.log(msg);

  let origin = msg.documents;

  //썸네일이 빈 문자열인것은 제외
  let data = origin.filter((val) => {
    return val.thumbnail != "";
  });

  console.log(data);

  for (let i = 0; i < 4; i++) {
    $(".imgbox4")
      .eq(i)
      .append("<img src='" + data[i].thumbnail + "'/>");
    $(".imgbox4")
      .eq(i)
      .append("<h3>" + data[i].title + "</h3>");

    var str = data[i].contents;
    var str2 = str.substring(0, 0);

    $(".imgbox4")
      .eq(i)
      .append("<p>" + str2 + "</p>");

    $(".imgbox4")
      .eq(i)
      .append("<button>" + "장바구니 담기" + "</button>");
  }
});



$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "세계사" },
  headers: { Authorization: "KakaoAK 45941751e295b1ee1621bc1864a3716e" },
}).done(function (msg) {
  console.log(msg);

  let origin = msg.documents;

  //썸네일이 빈 문자열인것은 제외
  let data = origin.filter((val) => {
    return val.thumbnail != "";
  });

  console.log(data);

  for (let i = 0; i < 4; i++) {
    $(".imgbox5")
      .eq(i)
      .append("<img src='" + data[i].thumbnail + "'/>");
    $(".imgbox5")
      .eq(i)
      .append("<h3>" + data[i].title + "</h3>");

    var str = data[i].contents;
    var str2 = str.substring(0, 0);

    $(".imgbox5")
      .eq(i)
      .append("<p>" + str2 + "</p>");

    $(".imgbox5")
      .eq(i)
      .append("<button>" + "장바구니 담기" + "</button>");
  }
});


$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "쇼펜하우어" },
  headers: { Authorization: "KakaoAK 45941751e295b1ee1621bc1864a3716e" },
}).done(function (msg) {
  console.log(msg);

  let origin = msg.documents;

  //썸네일이 빈 문자열인것은 제외
  let data = origin.filter((val) => {
    return val.thumbnail != "";
  });

  console.log(data);

  for (let i = 0; i < 4; i++) {
    $(".imgbox6")
      .eq(i)
      .append("<img src='" + data[i].thumbnail + "'/>");
    $(".imgbox6")
      .eq(i)
      .append("<h3>" + data[i].title + "</h3>");

    var str = data[i].contents;
    var str2 = str.substring(0, 0);

    $(".imgbox6")
      .eq(i)
      .append("<p>" + str2 + "</p>");

    $(".imgbox6")
      .eq(i)
      .append("<button>" + "장바구니 담기" + "</button>");
  }
});


$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "니체" },
  headers: { Authorization: "KakaoAK 45941751e295b1ee1621bc1864a3716e" },
}).done(function (msg) {
  console.log(msg);

  let origin = msg.documents;

  //썸네일이 빈 문자열인것은 제외
  let data = origin.filter((val) => {
    return val.thumbnail != "";
  });

  console.log(data);

  for (let i = 0; i < 4; i++) {
    $(".imgbox7")
      .eq(i)
      .append("<img src='" + data[i].thumbnail + "'/>");
    $(".imgbox7")
      .eq(i)
      .append("<h3>" + data[i].title + "</h3>");

    var str = data[i].contents;
    var str2 = str.substring(0, 0);

    $(".imgbox7")
      .eq(i)
      .append("<p>" + str2 + "</p>");

    $(".imgbox7")
      .eq(i)
      .append("<button>" + "장바구니 담기" + "</button>");
  }
});


$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "마르크스" },
  headers: { Authorization: "KakaoAK 45941751e295b1ee1621bc1864a3716e" },
}).done(function (msg) {
  console.log(msg);

  let origin = msg.documents;

  //썸네일이 빈 문자열인것은 제외
  let data = origin.filter((val) => {
    return val.thumbnail != "";
  });

  console.log(data);

  for (let i = 0; i < 4; i++) {
    $(".imgbox8")
      .eq(i)
      .append("<img src='" + data[i].thumbnail + "'/>");
    $(".imgbox8")
      .eq(i)
      .append("<h3>" + data[i].title + "</h3>");

    var str = data[i].contents;
    var str2 = str.substring(0, 0);

    $(".imgbox8")
      .eq(i)
      .append("<p>" + str2 + "</p>");

    $(".imgbox8")
      .eq(i)
      .append("<button>" + "장바구니 담기" + "</button>");
  }
});
