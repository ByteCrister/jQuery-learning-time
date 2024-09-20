
// document.querySelector('#b1').addEventListener('click', ()=>{
//     document.querySelector('#h1').innerHTML = 'You have just clicked on the button'
// })


/************* add direct event listener using JQuery ************/
$('#b1').click(()=>{
    $('#h1').text('You have just clicked on the button');
})


/************ toggleClass() ************/
$('#b2').click(function () { 
   $('#h2').toggleClass('style');
    
});


/****** add listener to all element using one declarations ******/
$('.btn').click(function () { 
   
    $('#h3').text(this.textContent+ " you have clicked")
    
});