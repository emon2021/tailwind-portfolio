$(document).ready(function () {
    $("#theme-sun").hide();
    // Theme Toggle
    $("#theme-toggle").click(function () {
        $("html").toggleClass("dark");

        let moon = $("#theme-moon");
        let sun = $("#theme-sun");

        if ($("html").hasClass("dark")) {
            sun.show();
            moon.hide();
        } else {
            moon.show();
            sun.hide();
        }
    })
})
