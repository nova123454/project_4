$(function() {
    $('button:nth-of-type(1)').click(function() {
        $(".event_1").show();
        $(".event_2").hide();
        $(".event_3").hide();
    });


    $('button:nth-of-type(2)').click(function() {
        $(".event_2").show();
        $(".event_1").hide();
        $(".event_3").hide();
    });


    $('button:nth-of-type(3)').click(function() {
        $(".event_3").show();
        $(".event_1").hide();
        $(".event_2").hide();
    });
});


$(function () {
    $.get("./sub_txt/txt1.txt", function (data) {
        console.log(data)
      $(".tmpbox").html(data);
    })

  });