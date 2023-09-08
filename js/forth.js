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
  $(".slide").stop().animate({ marginLeft: "-33.33%" }, 500, function () {
      $(".slide li:first").appendTo(".slide");
      $(".slide").css({ marginLeft: 0 });
    });
});

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "경제" },
  headers: { Authorization: "KakaoAK 45941751e295b1ee1621bc1864a3716e" },
})
.done(function (msg) {
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
    $(".imgbox")
      .eq(i)
      .append("<h6>" + data[i].authors[0] + "</h6>");

    var str = data[i].contents;
    var str2 = str.substring(0, 20);

    $(".imgbox")
      .eq(i)
      .append("<p>" + str2 + "</p>");

    $(".imgbox")
      .eq(i)
      .append("<button>" + "click" + "</button>");
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
