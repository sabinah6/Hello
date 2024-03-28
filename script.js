$(".add").click(function() {
    var image = $(".picture-url").val();
    $(".gallery").append("<img src=" + image + ">");
    $(".picture-url").val(" ");
});