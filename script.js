const activeClass = 'bg-clip-text font-semibold	text-transparent bg-gradient-to-r from-green-300 0 to-indigo-500 font-black';
const plusIcon = `<i class="fa-solid fa-plus"></i>`;
const minusIcon = `<i class="fa-solid fa-minus"></i>`;


// Nav active class change
$($("ul li a")[0]).addClass(activeClass)

$("ul li a").click(function(){
    const navLinks = $("ul li a");
    for (let index = 0; index < navLinks.length; index++) {
        $(navLinks[index]).removeClass(activeClass)
        
    }
    $(this).addClass(activeClass)
})

// Skill click events
$("#nav-skills").click(function(){
    $(".section-wrapper").addClass("hidden")
    $("#skills").removeClass("hidden")
    $("html, body").animate({ scrollTop: 0 }, "slow");

})

// Home click events
$("#nav-home").click(function(){
    $(".section-wrapper").addClass("hidden")
    $("#home").removeClass("hidden")

    $("html, body").animate({ scrollTop: 0 }, "slow");

})

// expand and collapse skills
$(".skill-toggle-btn").click(function(){

    if($(this).html().trim() == plusIcon){
        $(this).html(minusIcon)
        console.log("plus");
    }
    else{
        $(this).html(plusIcon)
        console.log("minus");
    }

    $(this).parent().siblings().toggle(500);    
});