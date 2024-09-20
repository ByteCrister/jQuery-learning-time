
// $('#h1').css("font-size", "3rem");
// $('#h1').css("color", "red")


/*********** same styling added using JQuery Jason ***********/
const HeadingStyles = 
{
    "font-size":"3rem",
    "color":"red"
};

$('#h1').css(HeadingStyles);



// document.querySelector('#h2').classList.add('style2')
$('#h2').addClass("style2");
$('#h2').removeClass();


/*********** adding multiple styles using JQuery **********/
$('#h2').addClass('style1 style3')