$(document).ready(function() {
    $('#introHeader').css({
        transform: "translateY(-150vh)"
    })
    $('#introAri').css({
        transform: "translateX(150vh) rotate(50deg)"
    });
    $('#introButton').css({
        opacity: 0
    })
    $('#intro').addClass('shown');
    setTimeout(startAnimation, 500);
});
var startAnimation = function() {
    $('#introHeader').transit({
        transform: "translateY(0)"
    }, 500, "snap", function() {
        $('#introAri').transit({
            transform: "translateX(0) rotate(0)"
        }, 1000, "snap", function() {
            $('#introButton').transit({
                opacity: 1
            });
        });
    });
};
$('#introButton').click(function(e) {
    e.preventDefault();
    $('#introButton').off("click").attr("href","#");
    $('#introHeader,#introButton').transit({opacity:0}, function() {
        var top = $('#introAri').position().top;
        var left = $('#introAri').position().left;
        $('#introAri').css({position:"absolute",top:top,left:left});
        
        $('#introAri').animate({
            margin:0,
            padding:0,
            fontSize:"3em",
            top: $('#targetA').position().top,
            left: $('#targetA').position().left
        }, function() {
            $('nav').transit({opacity:1},function() {
                $('#introAri').remove();
                location.assign("./aboutMe")
            });
        });
    });
});