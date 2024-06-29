const activeClass = 'bg-clip-text font-semibold		 text-transparent bg-gradient-to-r from-green-300 0 to-indigo-500 font-black';

$("ul li a").click(function(){
    const navLinks = $("ul li a");
    for (let index = 0; index < navLinks.length; index++) {
        $(navLinks[index]).removeClass(activeClass)
        
    }
    $(this).addClass(activeClass)
})