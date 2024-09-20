/* 

hide()
show()
toggle()

fadeIn()
fadeOut()
fadeToggle()
fadeTo()

slideUp()
slideDown()
slideToggle()

animate( { }, time)
animate( { } )
*/

let toggle = false;
// example - 1
$("#btn-1").click(() => {
    // $('.hide-div').hide(1000).show(2000);

    if (toggle) {
        $(".hide-div").hide(1000);
        toggle = false;
    } else {
        $(".hide-div").show(1000);
        toggle = true;
    }
});

// example - 2
$("#btn-2").click(() => {
    $(".toggle-div").toggle(1000);
});

// example - 3
$("#btn-3").click(() => {
    $(".fade-div").fadeIn(2000).fadeOut(2000);
});

// example - 4
$("#btn-4").click(() => {
    $(".fade-toggle-div").fadeToggle(2000);
});

// example - 5
let fadeOpacity = true;
$("#btn-5").click(() => {
    if (fadeOpacity) {
        $("#fade-opacity-div").fadeTo(2000, 0.2);
        console.log("Fade Opacity " + fadeOpacity);
        fadeOpacity = false;
    } else {
        $("#fade-opacity-div").fadeTo(2000, 1);
        console.log("Fade Opacity " + fadeOpacity);
        fadeOpacity = true;
    }
});

// example - 6
$("#btn-6").click(() => {
    $("#slide").slideUp(1000);
    console.log("Slide Up Clicked");
});
$("#btn-7").click(() => {
    $("#slide").slideDown(1000);
    console.log("Slide Down Clicked");
});
$("#btn-8").click(() => {
    $("#slide").slideToggle(1000);
    console.log("Slide Toggle Clicked");
});

// example - 7
let widthToggle = false;
$("#btn-9").click(() => {
    if (widthToggle) {
        $("#anim").animate({ opacity: "0.5", width: "100%" }, 1000);
        widthToggle = false;
    } else {
        $("#anim").animate({ opacity: "1", width: "10%" }, 1000);
        widthToggle = true;
    }
});
