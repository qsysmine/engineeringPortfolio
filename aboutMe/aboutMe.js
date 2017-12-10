$('nav>a, .navLink').click(function(e) {
    if($(this).hasClass("external")) return;
    e.preventDefault();
    var href = $(this).attr("href");
    $('#aboutMePhoto').transit({"scale":"0"}, 1000, "ease-in-out", function() {
        $('#aboutMeContainer').transit({y:-2 * ($('#aboutMeContainer').height())}, 1000, "ease-in-out", function() {
            location.assign(href);
        })
    });
});