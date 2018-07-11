// Jon Gomez  6/30/18

// Changing color on the hyperlinks in the footer
$(document).ready(function() {
    $("a").hover(function() {
        $(this).css("color", "black");
    }, function() {
        $(this).css("color", "gray");
    });
});

// Changing the color in the body
$(document).ready(function() {
    $("p").hover(function() {
        $(this).css("color", "red");
    }, function() {
        $(this).css("color", "black");
    });
});

$(document).ready(function() {
    $("li").hover(function() {
        $(this).css("color", "red");
    }, function() {
        $(this).css("color", "black");
    });
});
