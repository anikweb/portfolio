const activeClass = 'bg-clip-text font-semibold		 text-transparent bg-gradient-to-r from-green-300 0 to-indigo-500 font-black';

$($("ul li a")[0]).addClass(activeClass)

$("ul li a").click(function(){
    const navLinks = $("ul li a");
    for (let index = 0; index < navLinks.length; index++) {
        $(navLinks[index]).removeClass(activeClass)
        
    }
    $(this).addClass(activeClass)
})

$("#nav-skills").click(function(){
    $(".section-wrapper").addClass("hidden")
    $("#skills").removeClass("hidden")
    $("html, body").animate({ scrollTop: 0 }, "slow");

})

$("#nav-home").click(function(){
    $(".section-wrapper").addClass("hidden")
    $("#home").removeClass("hidden")

    $("html, body").animate({ scrollTop: 0 }, "slow");

})