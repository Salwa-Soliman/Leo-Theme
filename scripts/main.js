$(document).ready(function() {
    $(".links").click(function(e) {
        e.preventDefault();
        // $("#nested-list").toggleClass("display-block");
        $("#nested-list").toggle();
    });
});