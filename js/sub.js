$(function () {
    $.get("./sub_txt/txt1.txt", function (data) {
        console.log(data)
      $(".tmpbox").html(data);
    })

  });