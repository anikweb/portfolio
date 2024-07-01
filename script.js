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
$("#nav-experience").click(function(){
    $(".section-wrapper").addClass("hidden")
    $("#experience").removeClass("hidden")

    $("html, body").animate({ scrollTop: 0 }, "slow");

})

$("#nav-portfolio").click(function(){
    $(".section-wrapper").addClass("hidden")
    $("#portfolio").removeClass("hidden")

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

function calculateDifference(startDate, endDate) {
    // Convert the dates to Date objects
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Calculate the difference in years and months
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    // Adjust the years and months if needed
    if (months < 0) {
        years--;
        months += 12;
    }

    return `${years} years ${months} months`;
}

// now days format yyyy-mm-dd
const currentDate = new Date().toISOString().slice(0,10);
console.log(currentDate);
$(".experience-year").html(calculateDifference('2023-01-01', currentDate));